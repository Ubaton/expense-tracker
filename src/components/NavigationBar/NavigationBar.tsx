import Link from "next/link";
import React from "react";
import Button from "./Button/page";

const NavigationBar = () => {
  return (
    <div className=" bg-zinc-900 w-[12rem] p-4">
      <h1 className="text-zinc-50 font-bold text-lg pb-4">Expense Tracker</h1>
      <ul className="flex flex-col items-center justify-center space-y-2 text-zinc-50">
        <span className="text-left px-4 hover:bg-zinc-800 w-full py-2 rounded-lg ">
          <Link href="/badgetpage">
            <li>Badget</li>
          </Link>
        </span>
        <span className="text-left px-4 hover:bg-zinc-800 w-full py-2 rounded-lg ">
          <Link href="#">
            <li>Expense</li>
          </Link>
        </span>

        <span className="text-left px-4 hover:bg-zinc-800 w-full py-2 rounded-lg ">
          <Link href="#">
            <li>Project</li>
          </Link>
        </span>

        <span className="text-left px-4 hover:bg-zinc-800 w-full py-2 rounded-lg ">
          <Link href="#">
            <li>List Contact</li>
          </Link>
        </span>
      </ul>
      <span className="fixed bottom-4">
        <Button variant="primary">Logout</Button>
      </span>
    </div>
  );
};

export default NavigationBar;
