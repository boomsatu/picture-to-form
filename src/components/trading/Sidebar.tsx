import { Button } from "@/components/ui/button";

export function Sidebar() {
  const sidebarItems = [
    { icon: "⭐", active: true },
    { icon: "📊" },
    { icon: "✏️" },
    { icon: "☰" },
    { icon: "📈" },
    { icon: "🔧" },
    { icon: "🔗" },
    { icon: "📖" },
    { icon: "🏠" },
    { icon: "💰" },
  ];

  return (
    <div className="w-12 lg:w-12 bg-card border-r border-border rounded-none flex lg:flex-col flex-row lg:items-center justify-center lg:py-4 py-2 lg:space-y-3 space-y-0 lg:space-x-0 space-x-3 overflow-x-auto lg:overflow-x-visible lg:h-auto h-16">
      {sidebarItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={`w-8 h-8 p-0 ${
            item.active 
              ? "bg-primary/20 text-primary" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <span className="text-sm">{item.icon}</span>
        </Button>
      ))}
      
      <div className="flex-1"></div>
      
      <div className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">
        Offline
      </div>
    </div>
  );
}