import { useEffect, useState } from "react";

export default function GithubContributionsBold() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative my-6 md:my-8">
      {/* Grid decorativo de fundo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(229, 231, 235, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(229, 231, 235, 0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div
        className={`
        relative transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
      >
        {/* Accent bar superior com suas cores */}
        <div
          className="h-1 w-20 md:w-24 rounded-full mb-4 md:mb-5 animate-pulse"
          style={{
            background: "linear-gradient(to right, #1393ca, #67BC28, #1393ca)",
          }}
        />

        {/* Container principal - Layout compacto */}
        <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] gap-3 md:gap-4">
          {/* Sidebar com informações */}
          <div className="space-y-3 md:space-y-4">
            <div>
              <h3
                className="text-xl md:text-2xl font-bold mb-1.5 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #E5E7EB, #94A3B8)",
                }}
              >
                GitHub Atividades
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#94A3B8" }}
              >
                Minha jornada de desenvolvimento
              </p>
            </div>

            {/* Stats cards com suas cores - Grid horizontal em mobile */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
              {/* Card Consistência - Verde */}
              <div
                className="rounded-lg p-2.5 md:p-3 backdrop-blur-sm border"
                style={{
                  background: "rgba(103, 188, 40, 0.05)",
                  borderColor: "rgba(103, 188, 40, 0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(103, 188, 40, 0.1)" }}
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      style={{ color: "#67BC28" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px]" style={{ color: "#94A3B8" }}>
                      Consistência
                    </p>
                    <p
                      className="text-xs font-semibold truncate"
                      style={{ color: "#E5E7EB" }}
                    >
                      Frequente
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Evolução - Cyan */}
              <div
                className="rounded-lg p-2.5 md:p-3 backdrop-blur-sm border"
                style={{
                  background: "rgba(19, 147, 202, 0.05)",
                  borderColor: "rgba(19, 147, 202, 0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(19, 147, 202, 0.1)" }}
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      style={{ color: "#1393ca" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px]" style={{ color: "#94A3B8" }}>
                      Atividade
                    </p>
                    <p
                      className="text-xs font-semibold truncate"
                      style={{ color: "#E5E7EB" }}
                    >
                      Distribuída no ano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Área do gráfico - Reduzida */}
          <div className="relative">
            {/* Background com blur usando suas cores */}
            <div
              className="absolute -inset-2 rounded-xl md:rounded-2xl blur-lg"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(103, 188, 40, 0.1), transparent, rgba(19, 147, 202, 0.1))",
              }}
            />

            {/* Card do gráfico */}
            <div
              className="relative backdrop-blur-xl rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl overflow-hidden border"
              style={{
                background: "rgba(30, 41, 59, 0.8)",
                borderColor: "rgba(51, 65, 85, 1)",
              }}
            >
              {/* Glow effect no topo usando suas cores */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(103, 188, 40, 0.5), transparent)",
                }}
              />

              {/* Wrapper do gráfico com scroll - Otimizado para mobile */}
              <div className="overflow-x-auto overflow-y-hidden -mx-1 px-1">
                {/* Indicador visual de scroll em mobile */}
                <div className="md:hidden flex justify-center mb-1.5">
                  <div className="flex gap-1">
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ background: "#94A3B8" }}
                    />
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ background: "#94A3B8" }}
                    />
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ background: "#94A3B8" }}
                    />
                  </div>
                </div>

                <div className="min-w-max pb-1.5">
                  <img
                    src="https://ghchart.rshah.org/67BC28/thgularte"
                    alt="Contribuições no GitHub"
                    loading="lazy"
                    className="w-full h-auto transition-all duration-300 hover:scale-[1.01] max-h-16 md:max-h-20"
                    style={{
                      filter: "contrast(1.2) brightness(1.1) saturate(1.2)",
                      minWidth: "240px",
                      maxWidth: "600px",
                    }}
                  />
                </div>

                {/* Dica de scroll apenas em mobile */}
                <div className="md:hidden text-center mt-1">
                  <p className="text-[9px]" style={{ color: "#94A3B8" }}>
                    ← Deslize para ver mais →
                  </p>
                </div>
              </div>

              {/* Footer do card - Responsivo e Compacto */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mt-2 pt-2 border-t"
                style={{ borderColor: "rgba(51, 65, 85, 1)" }}
              >
                <div
                  className="flex items-center gap-2 text-[9px] md:text-[10px]"
                  style={{ color: "#94A3B8" }}
                >
                  <span className="flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#334155" }}
                    />
                    Baixa
                  </span>
                  <span className="flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#67BC28" }}
                    />
                    Alta
                  </span>
                </div>

                <a
                  href="https://github.com/thgularte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-[9px] md:text-[10px] transition-colors"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#67BC28")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94A3B8")
                  }
                >
                  <span>Ver perfil</span>
                  <svg
                    className="w-2.5 h-2.5 md:w-3 md:h-3 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative orbs com suas cores - Menores */}
        <div
          className="absolute -z-10 top-0 right-0 w-32 h-32 md:w-48 md:h-48 rounded-full blur-xl md:blur-2xl animate-pulse"
          style={{
            background: "rgba(103, 188, 40, 0.05)",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute -z-10 bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 rounded-full blur-xl md:blur-2xl animate-pulse"
          style={{
            background: "rgba(19, 147, 202, 0.05)",
            animationDuration: "6s",
          }}
        />
      </div>
    </div>
  );
}
