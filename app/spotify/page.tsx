import Image from "next/image";

export default function Spotify() {
  return (
    <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-bgFasting">
      <div className="w-full grid grid-cols-2 items-center justify-items-center gap-10">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-[40px] font-bold uppercase">Better Together</h1>
          <p>Date Posted</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            officia dolore provident rerum, accusamus voluptates, alias earum
            eaque distinctio eligendi minus blanditiis quo perferendis natus
            unde laborum numquam veritatis minima?
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/images/DSC09496.jpg"
            alt="image"
            width={300}
            height={150}
          ></Image>
        </div>
      </div>
    </section>
  );
}
