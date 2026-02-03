import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import SectionHome from "@/sections/homeSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activeLinkId="home" />
        <SectionHome />
      <Footer />
    </div>
  );
}
