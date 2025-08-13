import { TradingHeader } from "@/components/trading/TradingHeader";
import { PriceHeader } from "@/components/trading/PriceHeader";
import { Sidebar } from "@/components/trading/Sidebar";
import { Chart } from "@/components/trading/Chart";
import { OrderBook } from "@/components/trading/OrderBook";
import { TradingPanel } from "@/components/trading/TradingPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TradingHeader />
      <PriceHeader />
      
      <div className="flex h-[calc(100vh-140px)]">
        <Sidebar />
        
        <div className="flex-1 flex">
          <Chart />
          <OrderBook />
          <TradingPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
