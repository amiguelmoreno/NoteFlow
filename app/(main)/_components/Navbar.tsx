"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import Title from "./Title";
import Banner from "./Banner";
import Menu from "./Menu";
import Publish from "./Publish";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined)
    return (
      <nav className='bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full flex items-center justify-between gap-x-4'>
        <Title.Skeleton></Title.Skeleton>
        <div className='flex items-center gap-x-2'>
          <Menu.Skeleton></Menu.Skeleton>
        </div>
      </nav>
    );

  if (document === null) return null;

  return (
    <>
      <nav className='bg-background dark:bg-[#1f1f1f] px-2 py-2 w-full flex items-center gap-x-4'>
        {isCollapsed && (
          <MenuIcon
            role='button'
            onClick={onResetWidth}
            className='h-6 w-6 text-muted-foreground'
          ></MenuIcon>
        )}
        <div className='flex items-center justify-between w-full'>
          <Title initialData={document}></Title>
          <div className='flex items-center gap-x-2'>
            <Publish initialData={document}></Publish>
            <Menu documentId={document._id}></Menu>
          </div>
        </div>
      </nav>
      {document.isArchived && <Banner documentId={document._id}></Banner>}
    </>
  );
};

export default Navbar;
