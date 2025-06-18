// src/components/layout/SocialSidebar.tsx

import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SOCIAL_LINKS } from "../constants/index";

const SocialSidebar = () => {
  return (
    // This sidebar is hidden on mobile (md:)
    <aside className="flex flex-col items-center fixed top-0 right-0 h-screen w-16 z-40">
      <div className="flex flex-col h-full justify-center space-y-4">
        {/* TooltipProvider is necessary for tooltips to work */}
        <TooltipProvider>
          {SOCIAL_LINKS.map((social) => (
            <Tooltip key={social.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-slate-700 hover:bg-slate-800"
                >
                  <a href={social.url} target="_blank">
                    <social.icon className="text-slate-400 hover:text-purple-400 transition-colors" size={22} />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="left"
                className="bg-slate-950 border-slate-800 text-slate-50"
              >
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </aside>
  );
};

export default SocialSidebar;