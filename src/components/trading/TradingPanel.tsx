import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function TradingPanel() {
  return (
    <Card className="w-full lg:w-80 xl:w-96 h-full lg:h-full h-auto bg-card border-border rounded-none">
      <div className="p-4">
        <Tabs defaultValue="market" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="limit">Limit</TabsTrigger>
            <TabsTrigger value="pro">Pro</TabsTrigger>
          </TabsList>
          
          <TabsContent value="market" className="space-y-4">
            {/* Order Type */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Order Type</span>
                <Select defaultValue="0.001">
                  <SelectTrigger className="w-20 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.001">0.001</SelectItem>
                    <SelectItem value="0.01">0.01</SelectItem>
                    <SelectItem value="0.1">0.1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Symbol */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Symbol</span>
                <Select defaultValue="hype">
                  <SelectTrigger className="w-20 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hype">HYPE</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Price</label>
              <Input 
                type="text" 
                value="44.535"
                className="font-mono"
                readOnly
              />
            </div>

            {/* Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Size</label>
                <span className="text-xs text-muted-foreground">HYPE</span>
              </div>
              <div className="space-y-2">
                <Input 
                  type="text" 
                  placeholder="0"
                  className="font-mono"
                />
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIF */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">TIF</span>
                <span className="text-xs text-muted-foreground">GTC</span>
              </div>
            </div>

            {/* Available to Trade */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Available to Trade</span>
                <span className="text-xs text-muted-foreground">0.00 USDC</span>
              </div>
            </div>

            {/* Price Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Price (USDC)</span>
                <span className="text-xs text-foreground font-mono">44.774</span>
              </div>
              <div className="text-center text-xs text-muted-foreground">Mid</div>
            </div>

            {/* Buy/Sell Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-buy-bg hover:bg-buy-hover text-white">
                Buy
              </Button>
              <Button className="bg-sell-bg hover:bg-sell-hover text-white">
                Sell
              </Button>
            </div>

            {/* Connect Button */}
            <Button variant="outline" className="w-full">
              Connect
            </Button>

            {/* Order Value */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Order Value</span>
                <span className="text-xs text-muted-foreground">N/A</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Fees</span>
                <span className="text-xs text-muted-foreground">0.0700% / 0.0400%</span>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex justify-between text-xs text-muted-foreground pt-4">
              <button className="hover:text-foreground">Docs</button>
              <button className="hover:text-foreground">Support</button>
              <button className="hover:text-foreground">Terms</button>
              <button className="hover:text-foreground">Privacy Policy</button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}