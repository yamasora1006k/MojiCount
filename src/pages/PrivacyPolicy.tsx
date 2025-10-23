import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
          <h1 className="mb-6 text-2xl font-bold">プライバシーポリシー</h1>
          
          <div className="prose max-w-none text-foreground">
            <p className="mb-4">
              文字数カウント Pro（以下「当サイト」）は、個人開発・運営のサービスです。
              ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">1. 収集する情報</h2>
            <p className="mt-2">
              当サイトでは、入力されたテキストをブラウザ上でのみ処理し、サーバーに送信することはありません。
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">2. クッキーの使用</h2>
            <p className="mt-2">
              当サイトでは、ユーザーエクスペリエンス向上のため、クッキーを使用する場合があります。
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">3. お問い合わせ</h2>
            <p className="mt-2">
              プライバシーポリシーに関するご質問がある場合は、お問い合わせフォームよりご連絡ください。
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">4. プライバシーポリシーの変更</h2>
            <p className="mt-2">
              当サイトは、必要に応じて本ポリシーを更新することがあります。変更がある場合は、このページでお知らせします。
            </p>
            
            <p className="mt-8 text-sm text-muted-foreground">
              最終更新日: 2025年10月23日
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
