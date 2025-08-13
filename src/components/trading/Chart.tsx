import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Settings, 
  Search, 
  Maximize2, 
  BarChart3,
  CandlestickChart,
  LineChart,
  Volume2,
  Crosshair,
  Pencil,
  Minus,
  TrendingUpDown,
  Circle,
  Square,
  Triangle
} from "lucide-react";

export function Chart() {
  const timeframes = [
    { label: "1m", active: false },
    { label: "5m", active: false },
    { label: "15m", active: false },
    { label: "1H", active: true },
    { label: "4H", active: false },
    { label: "1D", active: false },
    { label: "1W", active: false },
    { label: "1M", active: false }
  ];

  const indicators = [
    "MA", "EMA", "BB", "RSI", "MACD", "Volume", "Stoch"
  ];

  const drawingTools = [
    { icon: Crosshair, name: "Crosshair" },
    { icon: Pencil, name: "Freehand" },
    { icon: Minus, name: "Trendline" },
    { icon: TrendingUpDown, name: "Channel" },
    { icon: Circle, name: "Circle" },
    { icon: Square, name: "Rectangle" },
    { icon: Triangle, name: "Triangle" }
  ];

  // Enhanced mock candlestick data
  const generateAdvancedCandles = () => {
    const candles = [];
    let price = 44.5;
    let volume = 1000;
    
    for (let i = 0; i < 120; i++) {
      const volatility = 0.02;
      const trend = Math.sin(i * 0.1) * 0.01;
      const noise = (Math.random() - 0.5) * volatility;
      const change = trend + noise;
      
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 0.3;
      const low = Math.min(open, close) - Math.random() * 0.3;
      
      volume = volume * (0.8 + Math.random() * 0.4);
      
      candles.push({ 
        open, 
        high, 
        low, 
        close, 
        volume,
        time: Date.now() - (120 - i) * 3600000 // hourly data
      });
      price = close;
    }
    
    return candles;
  };

  const candleData = generateAdvancedCandles();
  const currentPrice = candleData[candleData.length - 1].close;
  const priceChange = currentPrice - candleData[candleData.length - 2].close;
  const priceChangePercent = (priceChange / candleData[candleData.length - 2].close) * 100;

  return (
    <div className="flex-1 bg-chart-bg border-r border-border">
      {/* Professional Chart Header */}
      <div className="flex items-center justify-between p-3 bg-card border-b border-border">
        <div className="flex items-center space-x-6">
          {/* Symbol and Price Info */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-primary rounded-full"></div>
              <span className="text-foreground font-semibold">HYPE/USDC</span>
              <Badge variant="outline" className="text-xs">Perpetual</Badge>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-foreground font-mono font-semibold text-lg">
                {currentPrice.toFixed(3)}
              </span>
              <span className={`font-mono ${priceChange >= 0 ? 'text-bullish' : 'text-bearish'}`}>
                {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(3)} ({priceChangePercent >= 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%)
              </span>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>H: 44.98</span>
                <span>L: 43.21</span>
                <span>V: 2.4M</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Chart Type Selector */}
          <div className="flex items-center space-x-1 bg-secondary rounded-md p-1">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <CandlestickChart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground">
              <BarChart3 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground">
              <LineChart className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Drawing Tools */}
          <div className="flex items-center space-x-1">
            {drawingTools.slice(0, 4).map((tool, index) => (
              <Button 
                key={index}
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
              >
                <tool.icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
          
          {/* Chart Controls */}
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Timeframe and Indicators Bar */}
      <div className="flex items-center justify-between p-3 bg-secondary/30 border-b border-border">
        <div className="flex items-center space-x-1">
          {timeframes.map((tf) => (
            <Button
              key={tf.label}
              variant={tf.active ? "default" : "ghost"}
              size="sm"
              className={`h-7 text-xs px-3 ${
                tf.active 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tf.label}
            </Button>
          ))}
        </div>
        
        <div className="flex items-center space-x-1">
          <span className="text-xs text-muted-foreground mr-2">Indicators:</span>
          {indicators.slice(0, 4).map((indicator) => (
            <Button
              key={indicator}
              variant="ghost"
              size="sm"
              className="h-7 text-xs px-2 text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              {indicator}
            </Button>
          ))}
          <Button variant="outline" size="sm" className="h-7 text-xs px-2">
            + Add
          </Button>
        </div>
      </div>

      {/* Professional Chart Area */}
      <div className="relative h-[500px] bg-chart-bg">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Professional Grid */}
          {[...Array(12)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${(i / 11) * 100}%`}
              x2="100%"
              y2={`${(i / 11) * 100}%`}
              stroke="hsl(var(--grid-line))"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i / 19) * 100}%`}
              y1="0"
              x2={`${(i / 19) * 100}%`}
              y2="100%"
              stroke="hsl(var(--grid-line))"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
          
          {/* Enhanced Candlesticks */}
          {candleData.slice(-80).map((candle, i) => {
            const x = (i / 80) * 100;
            const isGreen = candle.close > candle.open;
            const bodyTop = isGreen ? candle.close : candle.open;
            const bodyBottom = isGreen ? candle.open : candle.close;
            const normalizePrice = (price: number) => ((price - 42) / 6) * 100;
            
            return (
              <g key={i}>
                {/* Shadow/Wick */}
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
                  x={`${x - 0.4}%`}
                  y={`${100 - normalizePrice(bodyTop)}%`}
                  width="0.8%"
                  height={`${Math.max(0.5, normalizePrice(bodyTop) - normalizePrice(bodyBottom))}%`}
                  fill={isGreen ? "hsl(var(--bullish))" : "hsl(var(--bearish))"}
                  stroke={isGreen ? "hsl(var(--bullish))" : "hsl(var(--bearish))"}
                  strokeWidth="0.5"
                />
              </g>
            );
          })}
          
          {/* Moving Averages */}
          <path
            d={candleData.slice(-80).map((candle, i) => {
              const x = (i / 80) * 100;
              const y = 100 - ((candle.close - 42) / 6) * 100;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            opacity="0.8"
          />
        </svg>
        
        {/* Professional Price Scale */}
        <div className="absolute right-0 top-0 h-full w-16 bg-card/90 border-l border-border flex flex-col justify-between py-4">
          {[48.000, 47.000, 46.000, 45.000, 44.000, 43.000, 42.000, 41.000].map((price, i) => (
            <div key={price} className="text-xs text-muted-foreground font-mono px-2 py-1">
              {price.toFixed(3)}
            </div>
          ))}
        </div>
        
        {/* Current Price Line */}
        <div 
          className="absolute right-0 w-full h-0.5 bg-primary opacity-80"
          style={{ top: `${100 - ((currentPrice - 42) / 6) * 100}%` }}
        >
          <div className="absolute right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-l">
            {currentPrice.toFixed(3)}
          </div>
        </div>
      </div>

      {/* Professional Volume Chart */}
      <div className="h-24 p-3 border-t border-border bg-card/50">
        <div className="flex items-center space-x-2 mb-2">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground text-xs">Volume</span>
          <span className="text-foreground text-xs font-mono">
            {(candleData[candleData.length - 1].volume / 1000).toFixed(1)}K
          </span>
        </div>
        <div className="h-12 flex items-end space-x-0.5">
          {candleData.slice(-80).map((candle, i) => {
            const isGreen = candle.close > candle.open;
            const height = (candle.volume / Math.max(...candleData.map(c => c.volume))) * 100;
            return (
              <div
                key={i}
                className={`flex-1 ${isGreen ? "bg-bullish" : "bg-bearish"} opacity-60 hover:opacity-80 transition-opacity`}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}