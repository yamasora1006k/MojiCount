import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 戻る
        </Button>
        
        <Card className="border-2 p-6 shadow-elegant">
          <div className="mb-6 flex items-center">
            <FileText className="mr-2 h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">利用規約</h1>
          </div>
          
          <div className="prose max-w-none text-foreground">
            <div className="rounded-lg bg-primary/5 p-4 mb-6">
              <p className="font-medium">
                本利用規約（以下「本規約」）は、当サイトの利用条件を定めるものです。
              </p>
            </div>
            
            <h2 className="mt-8 text-xl font-semibold">第1条（適用）</h2>
            <p className="mt-2">
              本規約は、当サイトの利用に関する一切の関係に適用されます。
            </p>
            
            <h2 className="mt-8 text-xl font-semibold">第2条（サービスの提供）</h2>
            <p className="mt-2">
              1. 本サービスは現状有姿（"as is"）で提供します。
            </p>
            <p className="mt-2">
              2. 当サイトは、表示結果の正確性・完全性を保証しません。
            </p>
            
            <h2 className="mt-8 text-xl font-semibold">第3条（禁止事項）</h2>
            <p className="mt-2">
              ユーザーは、以下の行為を行ってはなりません：
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>法令または公序良俗に反する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>不正アクセスを試みる行為</li>
              <li>その他、当サイトが不適切と判断する行為</li>
            </ul>
            
            <h2 className="mt-8 text-xl font-semibold">第4条（サービスの変更・中断）</h2>
            <p className="mt-2">
              当サイトは、予告なく本サービスの内容を変更、または提供を中断・終了する場合があります。
            </p>
            
            <h2 className="mt-8 text-xl font-semibold">第5条（準拠法・管轄裁判所）</h2>
            <p className="mt-2">
              1. 本規約の解釈および適用は、日本法に準拠するものとします。
            </p>
            <p className="mt-2">
              2. 本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
            
            <div className="mt-8 rounded-lg bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                制定日: 2023年1月1日<br />
                最終改定日: 2025年10月23日
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
