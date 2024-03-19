"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className='underline'>NoteFlow</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        NoteFlow is the connected workspace where <br />
        better, faster works happens.
      </h3>

      {isLoading && (
        <div className='w-full flex justify-center items-center'>
          <Spinner size='lg'></Spinner>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter NoteFlow <ArrowRight className='h-4 w-4 ml-2'></ArrowRight>
          </Link>
        </Button>
      )}
      {!isLoading && !isAuthenticated && (
        <SignInButton mode='modal'>
          <Button>
            Get NoteFlow free
            <ArrowRight></ArrowRight>
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
