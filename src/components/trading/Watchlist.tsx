import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Search, 
  TrendingUp, 
  TrendingDown,
  Plus,
  MoreHorizontal
} from "lucide-react";

export function Watchlist() {
  const watchlistData = [
    {
      symbol: "BTC/USDT",
      name: "Bitcoin",
      price: 43250.00,
      change: 1250.50,
      changePercent: 2.98,
      volume: "1.2B",
      isStarred: true
    },
    {
      symbol: "ETH/USDT", 
      name: "Ethereum",
      price: 2650.25,
      change: -45.75,
      changePercent: -1.69,
      volume: "890M",
      isStarred: true
    },
    {
      symbol: "SOL/USDT",
      name: "Solana", 
      price: 95.40,
      change: 3.25,
      changePercent: 3.53,
      volume: "340M",
      isStarred: false
    },
    {
      symbol: "HYPE/USDC",
      name: "Hyperliquid",
      price: 44.513,
      change: 1.057,
      changePercent: 2.43,
      volume: "181M",
      isStarred: true
    },
    {
      symbol: "AVAX/USDT",
      name: "Avalanche",
      price: 36.85,
      change: -1.20,
      changePercent: -3.15,
      volume: "125M",
      isStarred: false
    },
    {
      symbol: "MATIC/USDT",
      name: "Polygon",
      price: 0.8450,
      change: 0.0125,
      changePercent: 1.50,
      volume: "89M",
      isStarred: false
    }
  ];

  return (
    <div className="bg-card border border-border rounded-none">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-foreground font-semibold">Markets</h3>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Star className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search markets..."
            className="pl-10 h-9 text-sm"
          />
        </div>

        {/* Market Categories */}
        <div className="flex space-x-1 mb-4">
          <Button variant="default" size="sm" className="h-7 text-xs">
            All
          </Button>
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            Favorites
          </Button>
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            DeFi
          </Button>
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            AI
          </Button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 text-xs text-muted-foreground mb-2 px-1 pb-2 border-b border-border">
          <div className="col-span-1"></div>
          <div className="col-span-5">Symbol</div>
          <div className="col-span-3 text-right">Price</div>
          <div className="col-span-3 text-right">24h%</div>
        </div>

        {/* Watchlist Items */}
        <div className="space-y-1 max-h-96 overflow-y-auto">
          {watchlistData.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 gap-2 items-center text-sm hover:bg-muted/30 px-1 py-2 rounded cursor-pointer group"
            >
              {/* Star */}
              <div className="col-span-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Star 
                    className={`w-3 h-3 ${
                      item.isStarred 
                        ? "fill-warning text-warning" 
                        : "text-muted-foreground"
                    }`} 
                  />
                </Button>
              </div>
              
              {/* Symbol and Name */}
              <div className="col-span-5">
                <div className="font-medium text-foreground font-mono text-xs">
                  {item.symbol}
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.name}
                </div>
              </div>
              
              {/* Price */}
              <div className="col-span-3 text-right">
                <div className="font-mono text-foreground font-medium text-xs">
                  {item.price < 1 
                    ? item.price.toFixed(4)
                    : item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })
                  }
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.volume}
                </div>
              </div>
              
              {/* 24h Change */}
              <div className="col-span-3 text-right">
                <div className={`font-mono text-xs flex items-center justify-end space-x-1 ${
                  item.change >= 0 ? 'text-bullish' : 'text-bearish'
                }`}>
                  {item.change >= 0 ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span>{item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Markets</span>
            <span>24h Vol: $12.5B</span>
          </div>
        </div>
      </div>
    </div>
  );
}