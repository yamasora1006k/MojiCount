import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface SocialMediaCheckerProps {
  text: string;
}

export const SocialMediaChecker = ({ text }: SocialMediaCheckerProps) => {
  const platforms = [
    { name: "Twitter (X)", limit: 280, icon: "𝕏" },
    { name: "Instagram", limit: 2200, icon: "📷" },
    { name: "Facebook", limit: 63206, icon: "👤" },
    { name: "LINE", limit: 10000, icon: "💬" },
  ];

  const getStatus = (length: number, limit: number) => {
    const percentage = (length / limit) * 100;
    if (length === 0) return { icon: null, color: "text-muted-foreground", bg: "bg-muted" };
    if (percentage < 80) return { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50 dark:bg-green-950" };
    if (percentage < 100) return { icon: AlertCircle, color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-950" };
    return { icon: XCircle, color: "text-red-600", bg: "bg-red-50 dark:bg-red-950" };
  };

  return (
    <Card className="border-2 p-6 shadow-soft">
      <h3 className="mb-4 text-lg font-semibold">SNS投稿チェック</h3>
      <div className="space-y-3">
        {platforms.map((platform) => {
          const status = getStatus(text.length, platform.limit);
          const StatusIcon = status.icon;
          const remaining = platform.limit - text.length;

          return (
            <div
              key={platform.name}
              className={`rounded-lg border p-3 transition-all ${status.bg}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{platform.icon}</span>
                  <span className="font-medium text-foreground">{platform.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {StatusIcon && <StatusIcon className={`h-5 w-5 ${status.color}`} />}
                  <span className={`text-sm font-semibold ${status.color}`}>
                    {remaining >= 0 ? `残り ${remaining.toLocaleString()}` : `${Math.abs(remaining).toLocaleString()} オーバー`}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full transition-all duration-500 ${
                      text.length > platform.limit
                        ? "bg-red-500"
                        : text.length > platform.limit * 0.8
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${Math.min((text.length / platform.limit) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
