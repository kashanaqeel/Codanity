import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { navigations, socials, otherNavigations } from "@/data/index";
import { Footer } from "./Footer";

type Ilayoutprops = {
    children: ReactNode
}

const Layout = ({ children }: Ilayoutprops) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar navigations={navigations}/>
  
        <main className="flex-grow pt-8 lg:pt-12">
          {children}
        </main>
        
        <Footer navigations={navigations} otherNavigations={otherNavigations} socials={socials}/>
      </div>
    );
  };

export default Layout;