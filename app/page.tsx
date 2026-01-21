import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AvatarRotation } from "@/components/ui/avatar_rotation";

export default function Home() {
  return (
    <>
      <Header activeLinkId="home" />
      <AvatarRotation primaryImage={"/primary.jpg"} secondaryImage={"/secundary.jpg"} />
      <Footer />
    </>
  );
}
