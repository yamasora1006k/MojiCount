import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HistoryItem {
  id: string;
  text: string;
  timestamp: number;
}

interface TextHistoryProps {
  history: HistoryItem[];
  onRestore: (text: string) => void;
  onClearHistory: () => void;
}

export const TextHistory = ({ history, onRestore, onClearHistory }: TextHistoryProps) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return "たった今";
    if (diffMins < 60) return `${diffMins}分前`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}時間前`;
    
    return date.toLocaleDateString("ja-JP", { 
      month: "short", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <Card className="border-2 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">履歴</h3>
        </div>
        {history.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearHistory}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          履歴はまだありません
        </p>
      ) : (
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-2">
            {history.map((item) => (
              <button
                key={item.id}
                onClick={() => onRestore(item.text)}
                className="w-full rounded-lg border bg-card p-3 text-left transition-all hover:scale-[1.02] hover:border-primary hover:shadow-soft"
              >
                <p className="mb-2 line-clamp-2 text-sm text-foreground">
                  {item.text.substring(0, 100)}
                  {item.text.length > 100 ? "..." : ""}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(item.timestamp)}</span>
                  <span>{item.text.length}文字</span>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      )}
    </Card>
  );
};
