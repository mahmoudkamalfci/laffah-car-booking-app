"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProfileMenuProps {
  user: {
    name: string;
    phone: string;
  };
}

export default function ProfileMenu({ user }: ProfileMenuProps) {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-transparent px-2 h-auto"
        >
          <Avatar className="size-10">
            <AvatarFallback className="bg-secondary text-secondary-foreground text-lg">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-primary text-base">
            {user.name}
          </span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 p-6" align="start">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarFallback className="bg-secondary text-secondary-foreground text-lg">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base text-primary">
              {user.name}
            </span>
            <span className="text-sm text-muted-foreground">{user.phone}</span>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer py-3">
          <Link href="/profile">إعدادات الحساب</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer py-3">
          حجوزاتى
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer py-3 text-destructive focus:text-destructive">
          تسجيل الخروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
