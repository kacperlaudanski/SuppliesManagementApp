'use client'

import Button from "../Button";

export default function NavigationBar() {
  return (
    <nav className="w-[18%] max-w-[350px] h-screen sticky bg-sky-200 p-8 flex flex-col justify-between items-center">
      <div className="w-full h-[42%] max-h-[350px] flex flex-col justify-between">
        <div className="w-full h-[50px] bg-neutral-100 flex justify-center items-center">LOGO</div>
        <div className="w-full h-[180px] flex flex-col justify-between">
          <Button variant={"navbarExtended"}>Dashboard</Button>
          <Button variant={"navbarExtended"}>Items</Button>
          <Button variant={"navbarExtended"}>Searching</Button>
        </div>
      </div>
      <div className="w-full h-[180px] flex flex-col justify-between">
        <Button variant={"navbarExtended"}>Notifications</Button>
        <Button variant={"navbarExtended"}>Settings</Button>
        <Button variant={"navbarExtended"}>Log Out</Button>
      </div>
    </nav>
  );
}
