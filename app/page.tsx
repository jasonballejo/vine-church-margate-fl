import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import TopMenu from "@/components/TopMenu";
import ServiceTimes from "@/components/ServiceTimes";
import GetInvolved from "@/components/GetInvolved";
import ExperienceGiving from "@/components/ExperienceGiving";

export default function Home() {
  return (
    <main
    // className="flex min-h-screen flex-col items-center"
    >
      <NavBar />
      <TopMenu />
      <ServiceTimes />
      <GetInvolved />
      <ExperienceGiving />
    </main>
  );
}
