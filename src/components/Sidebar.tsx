"use client";

import { BadgeCent, Bell, Home, Trophy, User } from "lucide-react";


import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
// import { Sheet } from "./ui/sheet";
import UserItem from "./ui/UserItem";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        { link: "/", icon: <Home />, text: "Home" },
        { link: "/", icon: <User />, text: "Profile" },
        { link: "/", icon: <Trophy />, text: "Leaderboards" },
        { link: "/", icon: <BadgeCent />, text: "Transfer Money" },
        { link: "/", icon: <Bell />, text: "Notifications" },
      ],
    },
    {
      group: "Games",
      items: [
        { link: "/coin-flip", text: "Coin Flip" },
        { link: "/", text: "Chess" },
        { link: "/", text: "Transfer Money" },
        { link: "/", text: "Logs" },
      ],
    },
  ];

  return (
    <div className="w-[300px] gap-4 min-w-[300px] border-r min-h-screen p-4 flex flex-col">
      {/* hello */}
      <div>
        <Sheet>
          <SheetTrigger className="sm:hidden">Click</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          {/* <CommandInput placeholder="Type a command or search..." /> */}
          <CommandList>
            {/* <CommandEmpty>No results found.</CommandEmpty> */}

            {menuList?.map((menus: any, key: number) => (
              <CommandGroup className="flex flex-col" key={key} heading={menus.group}>
                {menus.items.map((option: any, optionKey: number) => (
                <Link href={option.link} passHref>
                <CommandItem className="cursor-pointer" key={optionKey}>
                  {option?.icon}
                  {option?.text}
                </CommandItem>
              </Link>
              
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator />
            {/* <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup> */}
          </CommandList>
        </Command>
      </div>
      <div>Settings/Notification</div>
    </div>
  );
}
