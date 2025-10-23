import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Code, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
        
        <Card className="border-2 p-8 shadow-elegant">
          <div className="text-center">
            <h1 className="text-3xl font-bold">運営者情報</h1>
            <p className="mt-2 text-muted-foreground">文字数カウント Pro について</p>
          </div>
          
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-muted/30 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">私たちについて</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                テキスト分析ツールの開発を通じて、より良い執筆体験を提供します。
              </p>
            </div>
            
            <div className="rounded-lg bg-muted/30 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">技術スタック</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                React, TypeScript, Tailwind CSS などの最新技術を使用して開発されています。
              </p>
            </div>
            
            <div className="rounded-lg bg-muted/30 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">ご支援について</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                より良いサービスを提供するため、皆様のご意見・ご要望をお待ちしています。
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold">運営者情報</h2>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>このサービスは個人開発・運営のプロジェクトです。</p>
              <p>開発者: 個人開発者</p>
              <p>開発開始: 2023年1月</p>
              <p>お問い合わせ: <a href="mailto:contact@example.com" className="text-primary hover:underline">contact@example.com</a></p>
            </div>
            
            <h2 className="mt-8 text-xl font-semibold">サービス内容</h2>
            <p className="mt-4 text-muted-foreground">
              文字数カウント Pro は、テキストの文字数や単語数を簡単にカウントできるオンラインツールです。
              文章の執筆やSNS投稿の際に便利にご利用いただけます。
            </p>
            
            <div className="mt-8 rounded-lg bg-primary/5 p-4">
              <h3 className="font-semibold text-primary">プライバシーポリシー</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                当サイトは、ユーザーのプライバシーを尊重し、入力されたテキストをサーバーに送信することはありません。
                詳細は<a href="/privacy" className="text-primary hover:underline">プライバシーポリシー</a>をご覧ください。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
