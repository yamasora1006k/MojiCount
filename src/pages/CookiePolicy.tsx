import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
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
            <Cookie className="mr-2 h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Cookieポリシー</h1>
          </div>
          
          <div className="prose max-w-none text-foreground">
            <div className="rounded-lg bg-primary/5 p-4 mb-6">
              <p className="font-medium">
                当サイトは必須Cookieに加え、解析・広告Cookieを使用します。
              </p>
              <p className="mt-2">
                初回訪問時に表示されるバナーから同意の選択・変更が可能です。
                同意の撤回は「Cookie設定」リンク（フッター）からいつでも行えます。
              </p>
            </div>
            
            <h2 className="mt-8 text-xl font-semibold">1. 使用するCookieの種類</h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li><strong>必須Cookie</strong> - サイトの基本的な機能を提供するために必要なCookie</li>
              <li><strong>解析Cookie</strong> - アクセス解析のためのCookie（Google Analytics）</li>
              <li><strong>広告Cookie</strong> - ユーザーに最適な広告を表示するためのCookie（Google AdSense）</li>
            </ul>
            
            <h2 className="mt-8 text-xl font-semibold">2. クッキーの管理方法</h2>
            <p className="mt-2">
              ブラウザの設定からCookieの受け入れ可否を選択できます。
              ただし、必須Cookieを無効にすると、ウェブサイトの一部の機能が正しく動作しない場合があります。
            </p>
            
            <h2 className="mt-8 text-xl font-semibold">3. プライバシー設定</h2>
            <p className="mt-2">
              プライバシー設定は、フッターの「Cookie設定」リンクからいつでも変更できます。
              また、Google Analyticsのオプトアウトは、
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Googleアナリティクス オプトアウト アドオン
              </a>
              をインストールすることで可能です。
            </p>
            
            <div className="mt-8 rounded-lg bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                最終更新日: 2025年10月23日
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;
