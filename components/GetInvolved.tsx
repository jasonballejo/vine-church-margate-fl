import React from "react";

export default function GetInvolved() {
  return (
    <section className="w-full flex justify-center items-center my-40">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center gap-10">
        <div className="w-[70%] flex flex-col justify-center items-center tracking-wider text-center gap-5">
          <h2 className="text-3xl font-bold uppercase">
            Get <span className="font-normal">involved</span>
          </h2>
          <p className="">
            New to the church? Just met Jesus? Don&apos;t believe yet?
            You&apos;re in the right place. The Church is for everyone; from the
            fameless to the famous. You don&apos;t have to believe to belong.
            We&apos;re all on a journey to become more like Jesus - loving God,
            loving people, building up the Church together.
          </p>
          <p>
            Interested to know what&apos;s next for you? What to do after you
            accepted Christ, want to learn, grow and serve, have any questions?
            Click a link below to get involved!
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="border-[3px] border-black hover:border-cyan-500 rounded-lg px-5 py-1">
            Life Group
          </button>
          <button className="border-[3px] border-black hover:border-cyan-500 rounded-lg px-5 py-1">
            Baptism
          </button>
          <button className="border-[3px] border-black hover:border-cyan-500 rounded-lg px-5 py-1">
            Volunteer
          </button>
          <button className="border-[3px] border-black hover:border-cyan-500 rounded-lg px-5 py-1">
            Courses
          </button>
        </div>
      </div>
    </section>
  );
}
