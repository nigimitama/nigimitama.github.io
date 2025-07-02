import Link from "@/components/Link"
import Title from "../components/Title"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Work History - Masayoshi Mita",
}

export default function WorkHistoryPage() {
  return (
    <>
      <Title title="Work History" subtitle="職務経歴" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <h1 className="text-2xl font-bold mb-6">職務経歴</h1>
          </section>

          <section className="my-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="ai-research">
                <AccordionTrigger className="text-left">マンションの価格予測AI・賃料予測AIの研究開発</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>
                      マンションの
                      <Link href="https://aisc.ga-tech.co.jp/research/data-science/home-value-estimate">
                        価格予測AI
                      </Link>
                      の研究や賃料予測AIの研究およびそれらAIのAPIの開発・保守運用を担当。
                    </p>
                    <div>
                      <p className="font-semibold mb-2">使用技術:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Python (scikit-learn, pandas, NumPy)</li>
                        <li>機械学習アルゴリズム (LightGBM)</li>
                        <li>AWS (Lambda, API Gateway, S3)</li>
                        <li>CircleCI</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data-platform">
                <AccordionTrigger className="text-left">データ集計基盤の構築・ダッシュボード開発</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>Treasure Dataによるデータ集計基盤の構築およびTableauによるダッシュボード開発を担当。</p>
                    <div>
                      <p className="font-semibold mb-2">使用技術:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Treasure Data</li>
                        <li>Tableau</li>
                        <li>SQL</li>
                        <li>ETL処理</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="web-apps">
                <AccordionTrigger className="text-left">営業支援システム・推薦システムの開発</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>
                      営業活動の効率化のための社内向けWebアプリの開発および商談に対し割り当てるべきセールスの推薦システムの開発。
                    </p>
                    <div>
                      <p className="font-semibold mb-2">使用技術:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>React / Next.js</li>
                        <li>TypeScript</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>推薦アルゴリズム</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="research">
                <AccordionTrigger className="text-left">事故物件の性質に関する研究</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>事故物件の市場価格への影響や、消費者の購買行動に与える影響について統計的手法を用いて分析。</p>
                    <div>
                      <p className="font-semibold mb-2">使用技術:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>R / Python</li>
                        <li>統計解析</li>
                        <li>因果推論</li>
                        <li>回帰分析</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rental-app">
                <AccordionTrigger className="text-left">マンション賃料査定業務効率化SPAアプリの開発</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>マンション賃料査定業務を効率化するSPA（Single Page Application）の開発。</p>
                    <div>
                      <p className="font-semibold mb-2">使用技術:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Vue.js</li>
                        <li>JavaScript</li>
                        <li>Ruby on Rails (API)</li>
                        <li>PostgreSQL</li>
                        <li>AWS (EC2, RDS)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="document-reader">
                <AccordionTrigger className="text-left">
                  マンション管理組合 総会資料の自動読み取りSPAアプリの開発
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>マンション管理組合の総会資料から重要情報を自動抽出するアプリケーションの開発。</p>
                    <div>
                      <p className="font-semibold mb-2">使用技術:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>React / Next.js</li>
                        <li>TypeScript</li>
                        <li>Python (OCR処理)</li>
                        <li>AWS (Lambda, S3, Textract)</li>
                        <li>自然言語処理</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scoring">
                <AccordionTrigger className="text-left">
                  マンション共用部設備の定量評価（スコアリング）の研究
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>マンション共用部の設備の充実度合いの定量評価（スコアリング）システムの研究開発。</p>
                    <div>
                      <p className="font-semibold mb-2">使用技術:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Python</li>
                        <li>テスト理論（IRT: Item Response Theory）</li>
                        <li>統計モデリング</li>
                        <li>因子分析</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      </main>
    </>
  )
}
