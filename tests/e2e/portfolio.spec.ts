import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const routes = ["/", "/experiencias", "/projetos", "/sobre-mim", "/contato"];
for (const width of [1440, 768, 390, 320]) {
  test(`páginas, imagens e layout em ${width}px`, async ({ page }) => {
    await mkdir("docs/qa", { recursive: true });
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect(img).toHaveJSProperty("complete", true);
        await expect
          .poll(() =>
            img.evaluate(
              (element) => (element as HTMLImageElement).naturalWidth,
            ),
          )
          .toBeGreaterThan(0);
      }
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
      await page.screenshot({
        path: `docs/qa/${route === "/" ? "home" : route.slice(1)}-${width}.png`,
        fullPage: true,
      });
    }
    expect(errors).toEqual([]);
  });
}

test("navegação mobile e accordions funcionam com teclado", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projetos", exact: true })
    .click();
  await expect(page).toHaveURL(/projetos$/);
  await expect(
    page.getByRole("button", { name: "Abrir menu" }),
  ).toHaveAttribute("aria-expanded", "false");
  const summary = page.locator("#phytobloom summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#phytobloom")).toHaveAttribute("open", "");
  await expect(
    page.locator("#phytobloom").getByText("// Resultado"),
  ).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page.locator("#phytobloom")).not.toHaveAttribute("open", "");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
});

test("carrossel alterna os depoimentos mantendo cards do mesmo tamanho", async ({
  page,
}) => {
  await page.clock.install();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const carousel = page.getByRole("region", {
    name: "Depoimentos profissionais",
  });
  const cards = carousel.locator('[aria-roledescription="slide"] > div');
  const activePage = carousel.locator('[data-active="true"]');
  const progress = carousel.getByRole("progressbar", {
    name: "Posição do carrossel",
  });

  await expect(activePage).toContainText("Micael Lima");
  await expect(activePage).toContainText("Eduarda Amaral");
  await expect(carousel.getByRole("button")).toHaveCount(0);
  await expect(progress).toHaveAttribute("aria-valuenow", "1");

  const heights = await cards.evaluateAll((elements) =>
    elements.map((element) =>
      Math.round(element.getBoundingClientRect().height),
    ),
  );
  expect(new Set(heights).size).toBe(1);

  await page.clock.fastForward(5000);
  await expect(activePage).toContainText("Bruno Lobato");
  await expect(activePage).toContainText("Felipe Vasconcelos");
  await expect(progress).toHaveAttribute("aria-valuenow", "2");

  await carousel.hover();
  await page.clock.fastForward(5000);
  await expect(activePage).toContainText("Bruno Lobato");

  const box = await carousel.boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.move(
    box!.x + box!.width * 0.75,
    box!.y + box!.height * 0.25,
  );
  await page.mouse.down();
  await page.mouse.move(
    box!.x + box!.width * 0.25,
    box!.y + box!.height * 0.25,
    { steps: 5 },
  );
  await page.mouse.up();
  await expect(activePage).toContainText("Flávio Wallefy");
  await expect(progress).toHaveAttribute("aria-valuenow", "3");

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(activePage.locator(":scope > div")).toHaveCount(1);
});

test("mestrado recebe destaque e SIAPESQ possui link externo", async ({
  page,
}) => {
  await page.goto("/experiencias");

  const mastersCard = page
    .getByRole("article")
    .filter({ hasText: "Mestrando em Engenharia de Computação" })
    .locator(":scope > div");
  const bachelorCard = page
    .getByRole("article")
    .filter({ hasText: "Bacharel em Sistemas de Informação" })
    .locator(":scope > div");

  await expect(mastersCard).toHaveClass(/bg-surface/);
  await expect(bachelorCard).toHaveClass(/bg-transparent/);

  const siapesqLink = page.getByRole("link", { name: /SIAPESQ/ });
  await expect(siapesqLink).toHaveAttribute("href", "https://siapesq.com");
  await expect(siapesqLink).toHaveAttribute("target", "_blank");
  await expect(siapesqLink).toHaveAttribute("rel", "noopener noreferrer");

  const vipLink = page.getByRole("link", { name: /Vip Veículos/ });
  await expect(vipLink).toHaveAttribute(
    "href",
    "https://www.vipveiculosriogrande.com.br",
  );
  await expect(vipLink).toHaveAttribute("target", "_blank");
  await expect(vipLink).toHaveAttribute("rel", "noopener noreferrer");

  await expect(page.getByText("Out de 2023 – Atualmente")).toHaveCSS(
    "display",
    "flex",
  );
  await expect(page.getByText("Entrega no ano de 2024")).toHaveCSS(
    "display",
    "flex",
  );
});

test("formulário valida campos, impede duplicação e mostra sucesso", async ({
  page,
}) => {
  await page.goto("/contato");
  await page.getByRole("button", { name: "Enviar", exact: true }).click();
  await expect(page.getByLabel("Nome", { exact: true })).toBeFocused();
  await expect(page.getByRole("status")).toContainText("Revise");
  let count = 0;
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route("**/api/contact", async (route) => {
    count++;
    await gate;
    await route.fulfill({ status: 200, json: { message: "ok" } });
  });
  await page.getByLabel("Nome", { exact: true }).fill("Teste");
  await page.getByLabel("E-mail", { exact: true }).fill("test@example.com");
  await page
    .getByLabel("Mensagem", { exact: true })
    .fill("Uma mensagem de teste");
  await page.getByRole("button", { name: "Enviar", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Enviando..." }),
  ).toBeDisabled();
  release();
  await expect(page.getByRole("status")).toContainText("sucesso");
  await expect(page.getByLabel("Nome", { exact: true })).toHaveValue("");
  expect(count).toBe(1);
});

test("formulário preserva dados após erro e permite tentar novamente", async ({
  page,
}) => {
  await page.goto("/contato");
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 502,
      json: { message: "Não foi possível enviar agora." },
    }),
  );
  await page.getByLabel("Nome", { exact: true }).fill("Teste");
  await page.getByLabel("E-mail", { exact: true }).fill("test@example.com");
  await page
    .getByLabel("Mensagem", { exact: true })
    .fill("Mensagem preservada");
  await page.getByRole("button", { name: "Enviar", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Não foi possível");
  await expect(page.getByLabel("Mensagem", { exact: true })).toHaveValue(
    "Mensagem preservada",
  );
  await expect(
    page.getByRole("button", { name: "Enviar", exact: true }),
  ).toBeEnabled();
});

test("endpoint real valida a origem e o honeypot sem enviar e-mail", async ({
  request,
  baseURL,
}) => {
  const headers = { Origin: baseURL! };
  const invalid = await request.post("/api/contact", { headers, data: {} });
  expect(invalid.status()).toBe(422);
  const trapped = await request.post("/api/contact", {
    headers,
    data: {
      name: "Teste",
      email: "test@example.com",
      message: "Validação do endpoint",
      website: "bot.example",
    },
  });
  expect(trapped.status()).toBe(200);
  expect((await request.get("/api/contact")).status()).toBe(405);
});

test("falha de rede mantém a mensagem e mostra orientação em português", async ({
  page,
}) => {
  await page.goto("/contato");
  await page.route("**/api/contact", (route) => route.abort("failed"));
  await page.getByLabel("Nome", { exact: true }).fill("Teste");
  await page.getByLabel("E-mail", { exact: true }).fill("test@example.com");
  await page
    .getByLabel("Mensagem", { exact: true })
    .fill("Mensagem preservada");
  await page.getByRole("button", { name: "Enviar", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Confira sua conexão");
  await expect(page.getByLabel("Mensagem", { exact: true })).toHaveValue(
    "Mensagem preservada",
  );
  await expect(
    page.getByRole("button", { name: "Enviar", exact: true }),
  ).toBeEnabled();
});
