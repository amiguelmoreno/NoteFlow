"use client";

import useScrollTop from "@/hooks/useScrollTop";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/modeToggle";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { scrolled } = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo></Logo>
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && <Spinner></Spinner>}
        {!isLoading && !isAuthenticated && (
          <>
            <SignInButton mode='modal'>
              <Button variant='ghost' size='sm'>
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>Get NoteFlow free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost' size='sm'>
              <Link href='/documents'>Enter NoteFlow</Link>
            </Button>
            <UserButton afterSignOutUrl='/'></UserButton>
          </>
        )}
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
