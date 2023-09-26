import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

interface SpotifyProps {
  Title;
}

export default function Spotify() {
  return (
    <section className=" w-full h-[100vh] bg-cover bg-no-repeat bg-gradient-to-r from-cyan-600 to-gray-300">
      <div className="w-full  grid grid-cols-2 items-center justify-items-center gap-10 py-16 pr-20 pl-32">
        <div className="flex flex-col text-white gap-5">
          <h1 className="text-[40px] font-bold uppercase">Better Together</h1>
          <p>Date Posted</p>
          <p className="w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            officia dolore provident rerum, accusamus voluptates, alias earum
            eaque distinctio eligendi minus blanditiis quo perferendis natus
            unde laborum numquam veritatis minima?
          </p>
          <div className="flex flex-col justify-center">
            <button className="w-[10%] border px-7 py-3 mb-2">
              <BsFillPlayFill />
            </button>
            <p>Listen</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/images/DSC09496.jpg"
            alt="image"
            width={700}
            height={250}
          ></Image>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="w-full bg-cover bg-no-repeat bg-gradient-to-l from-cyan-600 to-gray-200">
        <h2 className="text-[25px] text-white font-bold pl-20 pt-14">
          Related Items
        </h2>
        <div className="w-full flex items-center justify-between gap-16 pb-16 pt-7 px-20">
          <div className="text-white flex flex-col justify-center gap-3">
            <Image
              src="/images/DSC09496.jpg"
              alt="image"
              width={300}
              height={100}
            />
            <p>Title of Video</p>
          </div>
          <div className="text-white flex flex-col justify-center gap-3">
            <Image
              src="/images/DSC09496.jpg"
              alt="image"
              width={300}
              height={100}
            />
            <p>Title of Video</p>
          </div>
          <div className="text-white flex flex-col justify-center gap-3">
            <Image
              src="/images/DSC09496.jpg"
              alt="image"
              width={300}
              height={100}
            />
            <p>Title of Video</p>
          </div>
          <div className="text-white flex flex-col justify-center gap-3">
            <Image
              src="/images/DSC09496.jpg"
              alt="image"
              width={300}
              height={100}
            />
            <p>Title of Video</p>
          </div>
        </div>
      </div>
    </section>
  );
}
