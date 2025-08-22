import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function TradingHeader() {
  return (
    <header className="bg-card border-b border-border px-3 lg:px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <span className="text-foreground font-semibold text-lg">Hyperliquid</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">Trade</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">Vaults</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">Portfolio</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">Staking</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">Referrals</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">Leaderboard</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">More</Button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Connect
          </Button>
          <Button variant="ghost" size="icon">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}