import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
      <Image
        className='dark:hidden'
        src='/notion.svg'
        alt='logo'
        height='40'
        width='40'
      ></Image>{" "}
      <Image
        className='dark:block'
        src='/notion-dark.svg'
        alt='logo'
        height='40'
        width='40'
      ></Image>
      <p className={cn("font-semibold", font.className)}>NoteFLow</p>
    </div>
  );
};

export default Logo;
