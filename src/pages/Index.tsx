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
      
      <div className="flex flex-col lg:flex-row h-[calc(100vh-140px)]">
        <Sidebar />
        
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Center - Chart */}
          <Chart />
          
          {/* Right Panels - Stack on mobile, side by side on desktop */}
          <div className="flex flex-col lg:flex-row lg:w-auto w-full">
            <OrderBookTabs />
            <TradingPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
