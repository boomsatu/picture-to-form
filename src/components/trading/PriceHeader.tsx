import { Badge } from "@/components/ui/badge";
import { MarketSelector } from "./MarketSelector";

export function PriceHeader() {
  return (
    <div className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3">
          <MarketSelector />
          <Badge variant="outline" className="text-xs">Spot</Badge>
        </div>
        
        <div className="flex items-center space-x-8 text-sm">
          <div>
            <div className="text-muted-foreground">Price</div>
            <div className="text-foreground font-mono font-medium">44.513</div>
          </div>
          
          <div>
            <div className="text-muted-foreground">24h Change</div>
            <div className="text-bullish font-mono font-medium">+1.057 / +2.43%</div>
          </div>
          
          <div>
            <div className="text-muted-foreground">24h Volume</div>
            <div className="text-foreground font-mono font-medium">181,399,334.29 USDC</div>
          </div>
          
          <div>
            <div className="text-muted-foreground">Market Cap</div>
            <div className="text-foreground font-mono font-medium">14,966,704,090 USDC</div>
          </div>
          
          <div>
            <div className="text-muted-foreground">Contract</div>
            <div className="text-foreground font-mono font-medium">0x0d01...11ec</div>
          </div>
        </div>
      </div>
    </div>
  );
}