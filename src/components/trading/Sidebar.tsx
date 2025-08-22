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
    <div className="w-12 bg-card border-r border-border rounded-none flex flex-col items-center py-4 space-y-3">
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