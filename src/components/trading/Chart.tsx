import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Chart() {
  const timeframes = ["5m", "1h", "D"];
  const indicators = ["Indicators"];

  // Mock candlestick data visualization
  const generateMockCandles = () => {
    const candles = [];
    let price = 44.5;
    
    for (let i = 0; i < 50; i++) {
      const change = (Math.random() - 0.5) * 2;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 0.5;
      const low = Math.min(open, close) - Math.random() * 0.5;
      
      candles.push({ open, high, low, close, volume: Math.random() * 100 });
      price = close;
    }
    
    return candles;
  };

  const candleData = generateMockCandles();

  return (
    <div className="flex-1 bg-chart-bg">
      {/* Chart Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-bullish">●</span>
            <span className="text-foreground font-mono text-sm">HYPE/USDC-107 • 1h • Hyperliquid</span>
            <span className="text-bullish font-mono text-sm">O 44.575</span>
            <span className="text-bullish font-mono text-sm">H 44.682</span>
            <span className="text-bearish font-mono text-sm">L 44.444</span>
            <span className="text-bearish font-mono text-sm">C 44.512</span>
            <span className="text-muted-foreground font-mono text-sm">-0.062000 (-0.14%)</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {timeframes.map((tf) => (
              <Button
                key={tf}
                variant={tf === "1h" ? "secondary" : "ghost"}
                size="sm"
                className="text-xs"
              >
                {tf}
              </Button>
            ))}
          </div>
          
          <Button variant="ghost" size="sm" className="text-xs">
            {indicators[0]}
          </Button>
          
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="w-6 h-6">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="w-6 h-6">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-96 p-4 relative">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Grid lines */}
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${(i / 7) * 100}%`}
              x2="100%"
              y2={`${(i / 7) * 100}%`}
              stroke="hsl(var(--grid-line))"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i / 9) * 100}%`}
              y1="0"
              x2={`${(i / 9) * 100}%`}
              y2="100%"
              stroke="hsl(var(--grid-line))"
              strokeWidth="0.5"
            />
          ))}
          
          {/* Mock candlesticks */}
          {candleData.map((candle, i) => {
            const x = (i / candleData.length) * 100;
            const isGreen = candle.close > candle.open;
            const bodyTop = isGreen ? candle.close : candle.open;
            const bodyBottom = isGreen ? candle.open : candle.close;
            const normalizePrice = (price: number) => ((price - 43) / 3) * 100;
            
            return (
              <g key={i}>
                {/* Wick */}
                <line
                  x1={`${x}%`}
                  y1={`${100 - normalizePrice(candle.high)}%`}
                  x2={`${x}%`}
                  y2={`${100 - normalizePrice(candle.low)}%`}
                  stroke={isGreen ? "hsl(var(--bullish))" : "hsl(var(--bearish))"}
                  strokeWidth="1"
                />
                {/* Body */}
                <rect
                  x={`${x - 0.5}%`}
                  y={`${100 - normalizePrice(bodyTop)}%`}
                  width="1%"
                  height={`${normalizePrice(bodyTop) - normalizePrice(bodyBottom)}%`}
                  fill={isGreen ? "hsl(var(--bullish))" : "hsl(var(--bearish))"}
                />
              </g>
            );
          })}
        </svg>
        
        {/* Price labels */}
        <div className="absolute right-2 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground font-mono">
          {[47.000, 46.000, 45.000, 44.000, 43.000, 42.000, 41.000, 40.000].map((price) => (
            <div key={price} className="bg-background px-1 rounded">
              {price.toFixed(3)}
            </div>
          ))}
        </div>
      </div>

      {/* Volume Chart */}
      <div className="h-20 p-4 border-t border-border">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-muted-foreground text-xs">Volume</span>
          <span className="text-bearish text-xs font-mono">24.577K</span>
        </div>
        <div className="h-12 flex items-end space-x-1">
          {candleData.map((candle, i) => (
            <div
              key={i}
              className={`w-2 ${candle.close > candle.open ? "bg-bullish" : "bg-bearish"} opacity-60`}
              style={{ height: `${candle.volume}%` }}
            />
          ))}
        </div>
        
        {/* Time labels */}
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
        </div>
      </div>
    </div>
  );
}