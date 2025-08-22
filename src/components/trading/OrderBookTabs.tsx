import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

export function OrderBookTabs() {
  // Order Book Data
  const asks = [
    { price: 44.520, size: 1250, total: 55650.00 },
    { price: 44.519, size: 980, total: 43628.62 },
    { price: 44.518, size: 1420, total: 63215.56 },
    { price: 44.517, size: 890, total: 39620.13 },
    { price: 44.516, size: 1680, total: 74786.88 },
    { price: 44.515, size: 750, total: 33386.25 },
    { price: 44.514, size: 1200, total: 53416.80 },
  ];

  const bids = [
    { price: 44.513, size: 2100, total: 93477.30 },
    { price: 44.512, size: 1890, total: 84127.68 },
    { price: 44.511, size: 1320, total: 58754.52 },
    { price: 44.510, size: 950, total: 42284.50 },
    { price: 44.509, size: 1150, total: 51185.35 },
    { price: 44.508, size: 780, total: 34716.24 },
    { price: 44.507, size: 1430, total: 63645.01 },
  ];

  const spread = asks[asks.length - 1].price - bids[0].price;
  const spreadPercent = ((spread / bids[0].price) * 100);

  // Recent Trades Data
  const recentTrades = [
    { price: 44.513, size: 125.5, time: "14:23:45", type: "buy" },
    { price: 44.512, size: 89.2, time: "14:23:44", type: "sell" },
    { price: 44.515, size: 203.8, time: "14:23:43", type: "buy" },
    { price: 44.511, size: 156.7, time: "14:23:42", type: "sell" },
    { price: 44.514, size: 98.3, time: "14:23:41", type: "buy" },
    { price: 44.510, size: 234.6, time: "14:23:40", type: "sell" },
    { price: 44.516, size: 78.9, time: "14:23:39", type: "buy" },
    { price: 44.513, size: 145.2, time: "14:23:38", type: "buy" },
    { price: 44.512, size: 67.8, time: "14:23:37", type: "sell" },
    { price: 44.515, size: 189.4, time: "14:23:36", type: "buy" },
  ];

  return (
    <Card className="w-full lg:w-72 xl:w-80 h-full lg:h-full h-96 bg-card border-border rounded-none">
      <Tabs defaultValue="orderbook" className="h-full">
        <div className="flex items-center justify-between p-4 pb-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="orderbook">Order Book</TabsTrigger>
            <TabsTrigger value="trades">Recent Trades</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="orderbook" className="px-4 pb-4 mt-0">
          <div className="space-y-4">
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="h-7 text-xs">
                  0.01
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs">
                  0.1
                </Button>
                <Button variant="default" size="sm" className="h-7 text-xs">
                  1
                </Button>
              </div>
              <Badge variant="outline" className="text-xs">14:23:45</Badge>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground pb-2 border-b border-border">
              <div>Price</div>
              <div className="text-right">Size</div>
              <div className="text-right">Total</div>
            </div>

            {/* Asks */}
            <div className="space-y-1">
              {asks.reverse().map((ask, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 text-xs hover:bg-muted/30 px-1 py-0.5 rounded cursor-pointer">
                  <div className="text-bearish font-mono">{ask.price.toFixed(3)}</div>
                  <div className="text-right text-foreground font-mono">{ask.size.toLocaleString()}</div>
                  <div className="text-right text-muted-foreground font-mono">{ask.total.toLocaleString()}</div>
                </div>
              ))}
            </div>

            {/* Spread */}
            <div className="py-2 border-y border-border">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Spread</span>
                <span className="text-foreground font-mono">
                  {spread.toFixed(3)} ({spreadPercent.toFixed(2)}%)
                </span>
              </div>
            </div>

            {/* Bids */}
            <div className="space-y-1">
              {bids.map((bid, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 text-xs hover:bg-muted/30 px-1 py-0.5 rounded cursor-pointer">
                  <div className="text-bullish font-mono">{bid.price.toFixed(3)}</div>
                  <div className="text-right text-foreground font-mono">{bid.size.toLocaleString()}</div>
                  <div className="text-right text-muted-foreground font-mono">{bid.total.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trades" className="px-4 pb-4 mt-0">
          <div className="space-y-4">
            {/* Header */}
            <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground pb-2 border-b border-border">
              <div>Price</div>
              <div className="text-right">Size</div>
              <div className="text-right">Time</div>
              <div className="text-center">Side</div>
            </div>

            {/* Trades List */}
            <div className="space-y-1 max-h-80 overflow-y-auto">
              {recentTrades.map((trade, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-4 gap-2 items-center text-xs hover:bg-muted/30 px-1 py-1 rounded cursor-pointer"
                >
                  <div className={`font-mono ${trade.type === 'buy' ? 'text-bullish' : 'text-bearish'}`}>
                    {trade.price.toFixed(3)}
                  </div>
                  <div className="text-right font-mono text-foreground">
                    {trade.size.toFixed(1)}
                  </div>
                  <div className="text-right font-mono text-muted-foreground">
                    {trade.time}
                  </div>
                  <div className="flex justify-center">
                    {trade.type === 'buy' ? (
                      <TrendingUp className="w-3 h-3 text-bullish" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-bearish" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Stats */}
            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-muted-foreground">24h Volume</div>
                  <div className="text-foreground font-mono">181.4M USDC</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Last Price</div>
                  <div className="text-bullish font-mono">44.513</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}