"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { Testimonial } from "@/data/testimonials";
import { Card } from "../ui/primitives";

const AUTOPLAY_INTERVAL = 5000;
const DESKTOP_QUERY = "(min-width: 768px)";

function subscribeToDesktop(callback: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

function groupTestimonials(items: Testimonial[], itemsPerPage: number) {
  const pages: Testimonial[][] = [];

  for (let index = 0; index < items.length; index += itemsPerPage) {
    pages.push(items.slice(index, index + itemsPerPage));
  }

  const lastPage = pages.at(-1);
  if (lastPage && lastPage.length < itemsPerPage) {
    lastPage.push(...items.slice(0, itemsPerPage - lastPage.length));
  }

  return pages;
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [activePage, setActivePage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const isDesktop = useSyncExternalStore(
    subscribeToDesktop,
    getDesktopSnapshot,
    getServerSnapshot,
  );
  const pages = groupTestimonials(items, isDesktop ? 2 : 1);
  const currentPage = pages.length > 0 ? activePage % pages.length : 0;

  useEffect(() => {
    if (
      isHovering ||
      isFocusWithin ||
      isDragging ||
      pages.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [currentPage, isDragging, isFocusWithin, isHovering, pages.length]);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("a")) {
      return;
    }

    pointerStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null) {
      return;
    }

    setDragOffset(event.clientX - pointerStartX.current);
  }

  function finishPointerGesture(
    event: ReactPointerEvent<HTMLDivElement>,
    cancelled = false,
  ) {
    if (pointerStartX.current === null) {
      return;
    }

    const distance = event.clientX - pointerStartX.current;
    const threshold = Math.min(80, event.currentTarget.clientWidth * 0.15);

    if (!cancelled && Math.abs(distance) >= threshold) {
      setActivePage((current) =>
        distance < 0
          ? ((current % pages.length) + 1) % pages.length
          : ((current % pages.length) - 1 + pages.length) % pages.length,
      );
    }

    pointerStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  if (pages.length === 0) {
    return null;
  }

  return (
    <div
      className="mx-auto mt-16 max-w-6xl cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Depoimentos profissionais"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocusWithin(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocusWithin(false);
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointerGesture}
      onPointerCancel={(event) => finishPointerGesture(event, true)}
    >
      <div
        className={`flex items-stretch ease-out motion-reduce:transition-none ${
          isDragging ? "transition-none" : "transition-transform duration-500"
        }`}
        style={{
          transform: `translateX(calc(-${currentPage * 100}% + ${dragOffset}px))`,
        }}
      >
        {pages.map((pageItems, pageIndex) => {
          const isActive = pageIndex === currentPage;

          return (
            <div
              key={pageItems.map((item) => item.id).join("-")}
              className="grid w-full shrink-0 auto-rows-fr gap-5 md:grid-cols-2"
              role="group"
              aria-roledescription="slide"
              aria-label={`${pageIndex + 1} de ${pages.length}`}
              aria-hidden={!isActive}
              data-active={isActive ? "true" : "false"}
            >
              {pageItems.map((item, itemIndex) => (
                <Card
                  key={`${item.id}-${itemIndex}`}
                  variant="outlined"
                  className="flex h-full flex-col sm:p-10"
                >
                  <figure className="flex h-full flex-col">
                    <span
                      className="h-14 text-7xl leading-none text-primary"
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <blockquote className="mb-10 text-base leading-relaxed text-soft">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-auto flex items-center justify-between gap-4 border-l-4 border-primary pl-3">
                      <div className="min-w-0">
                        <p className="text-lg">{item.name}</p>
                        <p className="text-sm text-soft">
                          {item.role}
                          {item.company ? ` · ${item.company}` : ""}
                        </p>
                      </div>
                      {item.linkedin && (
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isActive ? undefined : -1}
                          aria-label={`LinkedIn de ${item.name}`}
                          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary hover:border-primary hover:bg-primary/10"
                        >
                          <span
                            aria-hidden="true"
                            className="size-5 bg-current"
                            style={{
                              maskImage: "url(/images/icon_linkedin.svg)",
                              maskPosition: "center",
                              maskRepeat: "no-repeat",
                              maskSize: "contain",
                            }}
                          />
                        </a>
                      )}
                    </figcaption>
                  </figure>
                </Card>
              ))}
            </div>
          );
        })}
      </div>

      <div
        role="progressbar"
        aria-label="Posição do carrossel"
        aria-valuemin={1}
        aria-valuemax={pages.length}
        aria-valuenow={currentPage + 1}
        aria-valuetext={`Página ${currentPage + 1} de ${pages.length}`}
        className="mx-auto mt-5 h-1.5 w-32 overflow-hidden rounded-full bg-primary/15"
      >
        <span
          aria-hidden="true"
          className="block h-full rounded-full bg-primary/60 transition-transform duration-500 motion-reduce:transition-none"
          style={{
            width: `${100 / pages.length}%`,
            transform: `translateX(${currentPage * 100}%)`,
          }}
        />
      </div>
    </div>
  );
}
