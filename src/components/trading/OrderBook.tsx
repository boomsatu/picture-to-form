import { Card } from "@/components/ui/card";

export function OrderBook() {
  // Mock order book data
  const asks = [
    { price: 44.535, size: 172.42, total: 373.39 },
    { price: 44.531, size: 22.42, total: 200.97 },
    { price: 44.529, size: 17.94, total: 178.55 },
    { price: 44.527, size: 12.50, total: 160.61 },
    { price: 44.526, size: 33.77, total: 148.11 },
    { price: 44.524, size: 20.22, total: 114.34 },
    { price: 44.523, size: 11.44, total: 94.12 },
    { price: 44.522, size: 22.42, total: 82.68 },
    { price: 44.520, size: 24.71, total: 60.26 },
    { price: 44.517, size: 22.42, total: 35.55 }
  ];

  const bids = [
    { price: 44.513, size: 13.13, total: 13.13 },
    { price: 44.509, size: 8.86, total: 8.86 },
    { price: 44.507, size: 21.88, total: 30.74 },
    { price: 44.506, size: 100.30, total: 131.04 },
    { price: 44.505, size: 160.71, total: 291.75 },
    { price: 44.503, size: 22.42, total: 314.17 },
    { price: 44.501, size: 17.95, total: 332.12 },
    { price: 44.500, size: 19.77, total: 351.89 },
    { price: 44.499, size: 33.77, total: 385.66 },
    { price: 44.497, size: 1.70, total: 387.36 }
  ];

  const spread = asks[asks.length - 1].price - bids[0].price;
  const spreadPercent = ((spread / bids[0].price) * 100).toFixed(3);

  return (
    <Card className="w-80 h-full bg-card border-border">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-foreground font-medium">Order Book</h3>
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground text-xs">Trades</span>
            <button className="text-muted-foreground text-xs">⋯</button>
          </div>
        </div>

        {/* Order book header */}
        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-2 px-1">
          <div>Price</div>
          <div className="text-right">Size (HYPE)</div>
          <div className="text-right">Total (HYPE)</div>
        </div>

        {/* Asks (sells) */}
        <div className="space-y-0.5 mb-2">
          {asks.reverse().map((ask, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 text-xs font-mono hover:bg-muted/50 px-1 py-0.5 rounded">
              <div className="text-bearish">{ask.price.toFixed(3)}</div>
              <div className="text-right text-foreground">{ask.size.toFixed(2)}</div>
              <div className="text-right text-muted-foreground">{ask.total.toFixed(2)}</div>
            </div>
          ))}
        </div>

        {/* Spread */}
        <div className="flex items-center justify-center py-2 bg-muted/30 rounded text-xs">
          <span className="text-muted-foreground">Spread</span>
          <span className="ml-2 text-foreground font-mono">{spread.toFixed(4)}</span>
          <span className="ml-1 text-muted-foreground">{spreadPercent}%</span>
        </div>

        {/* Bids (buys) */}
        <div className="space-y-0.5 mt-2">
          {bids.map((bid, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 text-xs font-mono hover:bg-muted/50 px-1 py-0.5 rounded">
              <div className="text-bullish">{bid.price.toFixed(3)}</div>
              <div className="text-right text-foreground">{bid.size.toFixed(2)}</div>
              <div className="text-right text-muted-foreground">{bid.total.toFixed(2)}</div>
            </div>
          ))}
        </div>

        {/* Current time */}
        <div className="text-center text-xs text-muted-foreground mt-4">
          11:13:42 (UTC+7)
        </div>
        
        {/* View controls */}
        <div className="flex items-center justify-center space-x-2 mt-2 text-xs">
          <button className="text-muted-foreground">%</button>
          <button className="text-muted-foreground">log</button>
          <button className="text-primary">auto</button>
        </div>
      </div>
    </Card>
  );
}