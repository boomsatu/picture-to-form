import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Clock, MoreHorizontal } from "lucide-react";

export function RecentTrades() {
  const recentTrades = [
    {
      id: "1",
      side: "buy",
      price: 44.535,
      size: 172.42,
      time: "11:13:42",
      total: 7681.23
    },
    {
      id: "2", 
      side: "sell",
      price: 44.531,
      size: 22.42,
      time: "11:13:40",
      total: 998.66
    },
    {
      id: "3",
      side: "buy", 
      price: 44.529,
      size: 17.94,
      time: "11:13:38",
      total: 799.25
    },
    {
      id: "4",
      side: "sell",
      price: 44.527,
      size: 12.50,
      time: "11:13:35",
      total: 556.59
    },
    {
      id: "5",
      side: "buy",
      price: 44.526,
      size: 33.77,
      time: "11:13:33",
      total: 1503.54
    },
    {
      id: "6",
      side: "buy",
      price: 44.524,
      size: 20.22,
      time: "11:13:30",
      total: 900.35
    },
    {
      id: "7",
      side: "sell",
      price: 44.523,
      size: 11.44,
      time: "11:13:28",
      total: 509.34
    },
    {
      id: "8",
      side: "buy",
      price: 44.522,
      size: 22.42,
      time: "11:13:25",
      total: 998.62
    }
  ];

  return (
    <Card className="w-80 h-full bg-card border-border">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-foreground font-medium">Recent Trades</h3>
            <Badge variant="outline" className="text-xs">Live</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Clock className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground mb-2 px-1 pb-2 border-b border-border">
          <div>Price</div>
          <div className="text-right">Size</div>
          <div className="text-right">Total</div>
          <div className="text-right">Time</div>
        </div>

        {/* Trades List */}
        <div className="space-y-1 max-h-80 overflow-y-auto">
          {recentTrades.map((trade) => (
            <div 
              key={trade.id}
              className="grid grid-cols-4 gap-2 items-center text-xs font-mono hover:bg-muted/30 px-1 py-1.5 rounded"
            >
              {/* Price with side indicator */}
              <div className="flex items-center space-x-1">
                {trade.side === "buy" ? (
                  <TrendingUp className="w-3 h-3 text-bullish" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-bearish" />
                )}
                <span className={trade.side === "buy" ? "text-bullish" : "text-bearish"}>
                  {trade.price.toFixed(3)}
                </span>
              </div>
              
              {/* Size */}
              <div className="text-right text-foreground">
                {trade.size.toFixed(2)}
              </div>
              
              {/* Total */}
              <div className="text-right text-muted-foreground">
                {trade.total.toFixed(0)}
              </div>
              
              {/* Time */}
              <div className="text-right text-muted-foreground">
                {trade.time}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-muted-foreground">Avg Price</span>
              <div className="text-foreground font-mono font-medium">44.527</div>
            </div>
            <div>
              <span className="text-muted-foreground">Volume (1h)</span>
              <div className="text-foreground font-mono font-medium">24.6K</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}