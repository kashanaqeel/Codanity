import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { navigations, socials, otherNavigations } from "@/data/index";
import { Footer } from "./Footer";
import ScrollProgress from "./effects/ScrollProgress";
import CursorGlow from "./effects/CursorGlow";
import PageTransition from "./effects/PageTransition";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Navbar navigations={navigations} />
      <div className="relative z-[2] min-w-0 flex-grow overflow-x-hidden pt-16 lg:pt-[4.25rem]">
        <PageTransition>{children}</PageTransition>
      </div>
      <Footer navigations={navigations} otherNavigations={otherNavigations} socials={socials} />
    </div>
  );
};

export default Layout;
