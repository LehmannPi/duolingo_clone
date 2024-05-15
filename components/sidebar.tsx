import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import SidebarItem from './sidebar-item';

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex  h-full w-[256px] fixed lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className
      )}
    >
      <Link href={'/learn'}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem href="/learn" label="learn" iconSrc="/learn.svg" />
        <SidebarItem
          href="/leaderboard"
          label="leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem href="/quests" label="quests" iconSrc="/quests.svg" />
        <SidebarItem href="/shop" label="shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
