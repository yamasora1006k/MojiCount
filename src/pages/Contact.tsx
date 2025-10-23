import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信処理を追加
    toast.success("お問い合わせ内容を送信しました。");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 戻る
        </Button>
        
        <Card className="border-2 p-6 shadow-elegant">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-4 text-2xl font-bold">お問い合わせ</h1>
            <p className="mt-2 text-muted-foreground">
              個人開発のサービスです。ご質問やご要望がございましたら、お気軽にお問い合わせください。
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              ※ 返信にはお時間をいただく場合がございます。
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                お名前 <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="山田 太郎"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                メールアドレス <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                お問い合わせ内容 <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="お問い合わせ内容を入力してください"
                rows={6}
                required
                className="min-h-[150px]"
              />
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full">
                送信する
              </Button>
            </div>
          </form>
          
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>または、直接メールでお問い合わせください</p>
            <a 
              href="mailto:support@example.com" 
              className="mt-1 inline-block font-medium text-primary hover:underline"
            >
              support@example.com
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
