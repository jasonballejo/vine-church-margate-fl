import Image from "next/image";
import Link from "next/link";
import StyledBtn from "./StyledBtn";

interface ConnectCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  buttonName1: string;
  buttonName2?: string;
  buttonNameBoolean: boolean;
}

function ConnectCard({
  image,
  title,
  description,
  href,
  buttonName1,
  buttonName2,
  buttonNameBoolean = false,
}: ConnectCardProps) {
  if (!buttonNameBoolean) {
    return (
      <div className="sm:w-[330px] w-full sm:h-[470px] h-full justify-center border rounded-[16px] overflow-hidden">
        <Image
          className="sm:h-[250px] h-[300px] object-center"
          src={image}
          alt={title}
          width={600}
          height={350}
        />
        <div className="w-full flex flex-col justify-center items-center px-3 py-3 gap-3 text-center">
          <h4>{title}</h4>
          <p>{description}</p>
          <Link href={href}>
            <StyledBtn name={buttonName1} />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sm:w-[330px] w-full sm:h-[470px] h-full justify-center border rounded-[16px] overflow-hidden">
        <Image
          className="sm:h-[250px] h-[300px] object-center"
          src={image}
          alt={title}
          width={600}
          height={350}
        />
        <div className="w-full flex flex-col justify-center items-center px-3 py-3 gap-3 text-center">
          <h4>{title}</h4>
          <p>{description}</p>
          <Link href={href}>
            <StyledBtn name={buttonName1} />
          </Link>
          <Link href={href}>
            <StyledBtn name={buttonName2} />
          </Link>
        </div>
      </div>
    );
  }
}

export default function ConnectSection() {
  return (
    <section className="w-full flex justify-center items-center my-5 relative z-10 sm:mt-0 mt-5 sm:px-0 px-3">
      <div className="max-w-5xl w-full flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-3">
        <ConnectCard
          image="/images/DSC09496.jpg"
          title="21 Day Prayer & Fast Devotional"
          description="Join us through our podcast. We have 21 days of devotional that
          can help you during this fast!"
          href="/fast"
          buttonName1="Listen to the Podcast"
          buttonNameBoolean={false}
        />
        <ConnectCard
          image="/images/fasting.png"
          title="Get Involved"
          description="New to the church? Just met Jesus? Don't believe yet?
          You're in the right place. The Church is for everyone; from
          the fameless to the famous..."
          href="#"
          buttonName1="Connect"
          buttonNameBoolean={false}
        />
        <ConnectCard
          image="/images/DSC09496.jpg"
          title="Service Times"
          description="Bring your family and friends. We can't wait to see you!"
          href="#"
          buttonName1="Saturday: 7:30pm"
          buttonName2="Sunday: 10:30am"
          buttonNameBoolean={true}
        />
      </div>
    </section>
  );
}
