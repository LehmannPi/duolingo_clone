import { Sidebar } from '@/components/sidebar';
import React from 'react';

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <main className="pl-[256px] h-full">
        <div className="bg-red-500">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
