import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

export default function Spotify() {
  return (
    <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-bgFasting">
      <div className="w-full grid grid-cols-2 items-center justify-items-center gap-10 py-20 pl-32">
        <div className="flex flex-col text-white gap-5">
          <h1 className="text-[40px] font-bold uppercase">Better Together</h1>
          <p>Date Posted</p>
          <p className="w-[60%]">
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
            width={550}
            height={250}
          ></Image>
        </div>
      </div>
    </section>
  );
}
