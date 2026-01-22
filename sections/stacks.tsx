import TechStack from "@/components/ui/stackLinguage";

export default function Stacks() {
  return (
    <>
      <TechStack
        title="Stack's"
        technologies={[
          {
            name: "TypeScript",
            icon: "/icons/icon_typescript.svg",
            alt: "TypeScript",
          },
          { name: "Python", icon: "/icons/icon_python.svg", alt: "Python" },
          {
            name: "Electron",
            icon: "/icons/icon_electron.svg",
            alt: "Electron",
          },
          {
            name: "JavaScript",
            icon: "/icons/icon_javascript.svg",
            alt: "JavaScript",
          },
          { name: "Node.js", icon: "/icons/icon_node.svg", alt: "Node.js" },
          { name: "React", icon: "/icons/icon_react.svg", alt: "React" },
          {
            name: "Tailwind",
            icon: "/icons/icon_tailwind.svg",
            alt: "Tailwind CSS",
          },
          {
            name: "PostgreSQL",
            icon: "/icons/icon_postgres.svg",
            alt: "PostgreSQL",
          },
        ]}
      />
    </>
  );
}
