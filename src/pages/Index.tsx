import { TradingHeader } from "@/components/trading/TradingHeader";
import { PriceHeader } from "@/components/trading/PriceHeader";
import { Sidebar } from "@/components/trading/Sidebar";
import { Chart } from "@/components/trading/Chart";
import { OrderBookTabs } from "@/components/trading/OrderBookTabs";
import { TradingPanel } from "@/components/trading/TradingPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TradingHeader />
      <PriceHeader />
      
      <div className="flex h-[calc(100vh-140px)]">
        <Sidebar />
        
        <div className="flex flex-1">
          {/* Center - Chart */}
          <Chart />
          
          {/* Right Panels */}
          <div className="flex">
            <OrderBookTabs />
            <TradingPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
