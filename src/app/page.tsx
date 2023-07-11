/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import AddIcon from "@mui/icons-material/Add";

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
    <div className="flex">
      <div
        className={` box-border h-screen  bg-blue-500    duration-300  overflow-hidden
        ${open ? "w-3/12 p-1" : "w-0 p-0"} `}
      >
        <div className="flex items-stretch gap-2">
          <button className="p-2 border border-gray-300 grow hover:bg-blue-700 hover:text-white">
            {" "}
            <AddIcon />
            <span className=" font-sans ">New Chat</span>
          </button>
          <a
            onClick={() => setOpen(!open)}
            className="text-black border cursor-pointer h-full p-2 hover:bg-blue-700"
          >
            <ViewSidebarOutlinedIcon className="hover:text-white" />
          </a>
        </div>
      </div>

      <div className=" h-screen w-full p-10 relative">
        {!open && (
          <a
            onClick={() => setOpen(!open)}
            className="text-black border cursor-pointer p-2 absolute top-1 left-1 hover:bg-gray-300"
          >
            <ViewSidebarOutlinedIcon />
          </a>
        )}

        <p className="mt-2">Home</p>
      </div>
    </div>
  );
}
