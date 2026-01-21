import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AvatarRotation } from "@/components/ui/avatar_rotation";
import { DescriptionHome } from "@/sections/descritionHome";

export default function Home() {
  return (
    <>
      <Header activeLinkId="home" />
      <Container>
        <DescriptionHome/>
      </Container>
      <Footer />
    </>
  );
}
