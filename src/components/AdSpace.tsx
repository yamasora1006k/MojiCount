import { Card } from "@/components/ui/card";

interface AdSpaceProps {
  slot?: "horizontal" | "vertical" | "square";
  className?: string;
}

export const AdSpace = ({ slot = "horizontal", className = "" }: AdSpaceProps) => {
  const dimensions = {
    horizontal: "h-[100px] md:h-[120px]",
    vertical: "h-[600px]",
    square: "h-[250px] md:h-[300px]",
  };

  return (
    <Card className={`${dimensions[slot]} ${className} flex items-center justify-center border-2 border-dashed border-muted bg-muted/20 transition-all hover:bg-muted/30`}>
      <div className="text-center text-muted-foreground">
        <p className="text-sm font-medium">広告スペース</p>
        <p className="text-xs mt-1">ここに広告コードを挿入できます</p>
      </div>
    </Card>
  );
};
