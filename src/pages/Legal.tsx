import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Copyright, Megaphone, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Legal = () => {
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
          <h1 className="mb-6 text-2xl font-bold">法的情報</h1>
          
          <div className="prose max-w-none space-y-12 text-foreground">
            {/* 免責事項 */}
            <section>
              <div className="mb-4 flex items-center">
                <AlertTriangle className="mr-2 h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">免責事項</h2>
              </div>
              <div className="space-y-4">
                <p>
                  本サービスの利用により生じたいかなる損害（間接損害、特別損害、結果的損害、逸失利益等を含む）についても、当サイトは一切の責任を負いません。
                </p>
                <p>
                  当サイトのコンテンツは、予告なく変更・削除される場合があります。
                </p>
              </div>
            </section>
            
            {/* 著作権 */}
            <section>
              <div className="mb-4 flex items-center">
                <Copyright className="mr-2 h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">著作権</h2>
              </div>
              <div className="space-y-4">
                <p>
                  当サイトの文章・画像・デザイン等のコンテンツの著作権は、当サイトまたは権利者に帰属します。
                </p>
                <p>
                  引用を行う場合は、出典を明記の上、公正な慣行に従い、引用の目的上正当な範囲内で行ってください。
                </p>
                <p>
                  当サイトへのリンクは自由ですが、インラインフレーム等での転載はお控えください。
                </p>
              </div>
            </section>
            
            {/* 広告掲載について */}
            <section>
              <div className="mb-4 flex items-center">
                <Megaphone className="mr-2 h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">広告掲載について</h2>
              </div>
              <div className="space-y-4">
                <p>
                  当サイトは Google AdSense による広告を掲載しています。
                </p>
                <p>
                  第三者配信事業者は、Cookie を使用して、ユーザーが当サイトや他サイトに過去にアクセスした情報に基づいて広告を配信します。
                </p>
                <p>
                  Google が広告 Cookie を使用していることや、その他の情報をユーザーがコントロールする方法については、
                  <a 
                    href="https://policies.google.com/technologies/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google のポリシーと規約
                  </a>
                  をご覧ください。
                </p>
              </div>
            </section>
            
            {/* アクセス解析 */}
            <section>
              <div className="mb-4 flex items-center">
                <BarChart className="mr-2 h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">アクセス解析</h2>
              </div>
              <div className="space-y-4">
                <p>
                  当サイトでは、Google アナリティクスを使用してアクセス情報を収集しています。
                </p>
                <p>
                  収集されるデータは匿名で、個人を特定するものではありません。
                </p>
                <p>
                  データの収集方法や利用目的については、
                  <a 
                    href="https://policies.google.com/technologies/partner-sites" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google のサービスを使用するサイトやアプリから収集した情報の Google による使用
                  </a>
                  をご覧ください。
                </p>
                <p>
                  アクセス解析を無効にしたい場合は、
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google アナリティクス オプトアウト アドオン
                  </a>
                  をインストールしてください。
                </p>
              </div>
            </section>
            
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

export default Legal;
