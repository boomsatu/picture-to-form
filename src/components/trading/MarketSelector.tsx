import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Watchlist } from "./Watchlist";

export function MarketSelector() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center space-x-2 hover:bg-muted/50"
        >
          <div className="w-6 h-6 bg-primary rounded-full"></div>
          <span className="text-foreground font-semibold text-lg">HYPE/USDC</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="p-0 w-[320px]" 
        side="bottom" 
        align="start"
      >
        <Watchlist />
      </PopoverContent>
    </Popover>
  );
}