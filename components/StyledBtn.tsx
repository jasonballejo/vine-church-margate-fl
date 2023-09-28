import React from "react";

interface StyledBtnProps {
  name: string;
}

export default function StyledBtn({ name }: StyledBtnProps) {
  return (
    <>
      {/* <button className="w-40 h-10 border-[3px] border-black hover:border-purple-500 rounded-lg"> */}
      <button className="inline-flex items-center justify-center p-1 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg">
        <span className="px-5 py-2 transition-all ease-in duration-75 rounded-md bg-[var(--gold)] hover:bg-white hover:text-black">
          {name}
        </span>
      </button>
    </>
  );
}
