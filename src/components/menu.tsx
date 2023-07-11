/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const menus = [
  { title: "home", gap: true },
  { title: "search" },
  { title: "house" },
  { title: "work", gap: true },
  { title: "internet" },
];

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <main className="flex">
      <div
        className={`flex flex-col bg-blue-400 h-screen w-72 relative open? 
        ${open ? "w-72" : "w-20"}  duration-300 p-3 pt-8 `}
      >
        <img
          src={"/left.png"}
          className={`p-1 w-7 h-7 absolute  border-2 bg-white  border-blue-400 rounded-full 
          cursor-pointer top-9 -right-3  
          ${!open && "rotate-180"} duration-300 `}
          onClick={() => setOpen(!open)}
          alt=""
        />

        <div className=" flex gap-x-3 items-center">
          <AcUnitIcon />
          <h1
            className={`text-white origin-left  font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            RunningPig
          </h1>
        </div>

        <ul className="pt-8">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`text-xl flex items-center gap-x-3 hover:bg-blue-300 cursor-pointer p-2 rounded-md
                ${menu.gap ? "mt-8" : "mt-2"}
              `}
            >
              <AutoAwesomeIcon />
              <span
                className={` duration-300 ${!open && "hidden"} origin-left`}
              >
                {/* origin-left 是设置变换的起点 */}
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>home page</h1>
      </div>
    </main>
  );
}
