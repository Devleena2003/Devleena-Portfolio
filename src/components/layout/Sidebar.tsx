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
    // THE FIX: Removed px-3 from here, padding is now on the links themselves for better control.
    <ul className="space-y-6 text-left"> 
      {NAVIGATION_LINKS.map((link) => (
        <li key={link}>
          <a
            href={`#${link}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              // THE FIX:
              // 1. Added `inline-block` to make the element's width fit the text content.
              // 2. Removed ALL conflicting color classes (`text-purple-500`, `text-slate-300`).
              // 3. Set a single, clear text color: `text-white`.
              "group relative left-5 inline-block p-2 text-lg font-semibold capitalize text-white transition-colors duration-300 hover:text-gray-300"
            )}
          >
            {link}
            
            <span
              className={cn(
                "absolute bottom-0 left-2 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500",
                // THE FIX: Changed `group-hover:w-full` to `group-hover:w-full`. This now works
                // correctly because the parent `<a>` tag is `inline-block`.
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
      {/* ====================================================== */}
      {/* MOBILE HEADER & SLIDE-OUT MENU (SHEET)                */}
      {/* ====================================================== */}
      <header className="md:hidden sticky top-0 z-40 flex items-center h-20 px-4 bg-black backdrop-blur-sm">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="left-0" size="icon">
              <Menu className="text-white" />
            </Button>
          </SheetTrigger>
          {/* THE FIX: Changed background to `bg-black` and adjusted padding/margins for better alignment. */}
          <SheetContent side="left" className="w-60 bg-black text-white flex flex-col justify-center">
            <nav>
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* ====================================================== */}
      {/* DESKTOP & TABLET - FIXED SIDEBAR                      */}
      {/* ====================================================== */}
      {/* THE FIX: Added `bg-black` to the desktop nav container. */}
      <nav className="hidden md:block fixed left-0 top-0 h-screen w-48 z-40 bg-black">
        <div className="flex flex-col h-full justify-center px-5">
          <NavLinks />
        </div>
      </nav>
    </>
  );
};

export default NavSidebar;