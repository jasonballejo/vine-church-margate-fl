import React from "react";

interface StyledBtnProps {
  name: string;
}

export default function StyledBtn({ name }: StyledBtnProps) {
  return (
    <>
      {/* <button className="w-40 h-10 border-[3px] border-black hover:border-purple-500 rounded-lg"> */}
      <button className="inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="px-5 py-2 transition-all ease-in duration-75 bg-white rounded-md">
          {name}
        </span>
      </button>
    </>
  );
}
