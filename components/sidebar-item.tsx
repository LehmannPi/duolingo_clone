'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

const SidebarItem = ({ href, iconSrc, label }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? 'sidebarOutline' : 'sidebar'}
      className="justify-start h-[52px]"
    >
      <Image
        src={iconSrc}
        alt={label}
        className="mr-5"
        height={32}
        width={32}
      />
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default SidebarItem;
