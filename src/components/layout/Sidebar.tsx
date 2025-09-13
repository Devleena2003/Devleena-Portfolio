// src/components/layout/NavSidebar.tsx

import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NAVIGATION_LINKS } from "../constants";
import { cn } from "../../lib/utils";
import { Menu } from "lucide-react";

const NavSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinks = () => (
    <ul className="space-y-6 text-left"> 
      {NAVIGATION_LINKS.map((link) => (
        <li key={link}>
          <a
            href={`#${link}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              // ===== THE MODIFICATION =====
              // 1. Changed default text color to a nice purple.
              // 2. Changed hover color to a brighter fuchsia to match the gradient.
              "group relative left-5 inline-block p-2 text-lg font-semibold capitalize text-purple-400 transition-colors duration-300 hover:text-fuchsia-400"
            )}
          >
            {link}
            
            <span
              className={cn(
                "absolute bottom-0 left-2 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500",
                "transition-all duration-300 ease-in-out group-hover:w-full"
              )}
            ></span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* MOBILE HEADER & SLIDE-OUT MENU */}
      <header className="md:hidden sticky top-0 z-40 flex items-center h-20 px-4 bg-black backdrop-blur-sm">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="left-0" size="icon">
              <Menu className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-60 bg-black text-white flex flex-col justify-center">
            <nav>
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* DESKTOP & TABLET - FIXED SIDEBAR */}
      <nav className="hidden md:block fixed left-0 top-0 h-screen w-48 z-40 bg-black">
        <div className="flex flex-col h-full justify-center px-5">
          <NavLinks />
        </div>
      </nav>
    </>
  );
};

export default NavSidebar;