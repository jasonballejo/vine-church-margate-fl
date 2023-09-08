import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import TopMenu from "@/components/TopMenu";
import ConnectSection from "@/components/ConnectSection";
import GetInvolved from "@/components/GetInvolved";
import ExperienceGiving from "@/components/ExperienceGiving";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
    // className="flex min-h-screen flex-col items-center"
    >
      <NavBar />
      <TopMenu />
      <ConnectSection />
      {/* <GetInvolved /> */}
      <ExperienceGiving />
      <Footer />
    </main>
  );
}
