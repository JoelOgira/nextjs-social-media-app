"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, Bookmark, Home, Mail, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useSearchContext } from "@/providers/search-provider";

interface MenuBarProps {
  className?: string;
}

export const menuRoutes = [
  {
    icon: Home,
    title: "Home",
    href: "/",
  },
  {
    icon: SearchIcon,
    title: "Search",
    href: "",
  },
  {
    icon: Bell,
    title: "Notifications",
    href: "/notifications",
  },
  {
    icon: Mail,
    title: "Messages",
    href: "/messages",
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    href: "/bookmarks",
  },
];

export default function MenuBar({ className }: MenuBarProps) {
  const { isMobile, showSearch, setShowSearch } = useSearchContext();

  const routesToDisplay = isMobile
    ? menuRoutes
    : menuRoutes.slice(0, 1).concat(menuRoutes.slice(2));

  return (
    <div className={className}>
      {routesToDisplay.map((route) => (
        <Button
          key={route.href}
          variant="ghost"
          className="flex items-center justify-start gap-3"
          title={route.title}
          onClick={() => {
            if (isMobile && route.title === "Search") {
              setShowSearch(!showSearch);
            }
          }}
          asChild
        >
          {route.title === "Search" && isMobile ? (
            <div>
              <route.icon className="size-5" />
              <span className="hidden lg:inline">{route.title}</span>
            </div>
          ) : (
            <Link href={route.href}>
              <route.icon className="size-5" />
              <span className="hidden lg:inline">{route.title}</span>
            </Link>
          )}
        </Button>
      ))}
    </div>
  );
}
