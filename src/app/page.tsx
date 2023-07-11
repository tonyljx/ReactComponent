/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import AddIcon from "@mui/icons-material/Add";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const menus = [
  { title: "home", gap: true },
  { title: "search" },
  { title: "house" },
  { title: "work", gap: true },
  { title: "internet" },
];

// const messageSessions = ;

export default function Home() {
  const [open, setOpen] = useState(true);
  const [sessionActive, setSessionActive] = useState(-1);
  const [delVisible, setDelVisible] = useState(false);

  const [messageSessions, setMessageSessions] = useState([
    { title: "learn Ts" },
    { title: "learn JS" },
    { title: "learn Java" },
    { title: "learn C++" },
  ]);

  const handleAdd = () => {
    setMessageSessions([
      ...messageSessions,
      {
        title: "hi",
      },
    ]);
  };

  const handleConfirm = (idx: number) => {
    const newMessageSessions = messageSessions.filter(
      (session, index) => index !== idx
    );
    setMessageSessions(newMessageSessions);
    setDelVisible(false);
  };

  const handleCancel = () => {
    setDelVisible(false);
  };

  return (
    <div className="flex">
      <div
        className={` box-border h-screen overflow-hidden  bg-blue-500    duration-300   flex flex-col
        ${open ? "w-3/12 p-1" : "w-0 p-0 "} `}
        //  hidden 设置hidden属性 没有动画
        //
      >
        {/* 导航栏 */}
        <div className="flex items-stretch gap-2">
          <button
            onClick={handleAdd}
            className="p-2 border border-gray-300 grow hover:bg-blue-700 hover:text-white"
          >
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

        {/* 消息体 */}
        <ul className="flex flex-col gap-3 mt-2 ">
          {messageSessions.map((message, idx) => (
            <li
              className={`p-3 flex items-center gap-2 
              hover:bg-slate-300 cursor-pointer rounded relative
                ${sessionActive === idx && "bg-slate-300"}
              `}
              onClick={() => {
                setSessionActive(idx);
              }}
              key={idx}
            >
              <MessageOutlinedIcon />
              <span className=" font-sans text-lg">{message.title}</span>
              {sessionActive === idx && (
                <button
                  onClick={(e) => {
                    e.preventDefault(); // 防止事件上升
                    setDelVisible(true);
                  }}
                >
                  <DeleteOutlineOutlinedIcon className=" hover:text-gray-500" />
                </button>
              )}

              {/* copy 弹窗确认框 */}
              {delVisible && sessionActive === idx && (
                <div className="absolute z-10 -top-10 -right-5 py-2   bg-slate-400 rounded-lg shadow-xl">
                  <p className=" ">确认删除吗？</p>
                  <div className="flex">
                    <button
                      onClick={() => handleConfirm(idx)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs mr-2 rounded "
                    >
                      确认
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-400 hover:bg-gray-500 text-white font-bold text-xs   rounded"
                    >
                      取消
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* 个人信息栏 */}
        <div className="mt-auto flex gap-2 p-3 border-t border-gray-400">
          <AccountCircleOutlinedIcon />
          <span>runningPig</span>
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
