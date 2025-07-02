import Link from "@/components/Link"
import Title from "../components/Title"

export const metadata = {
  title: "Experience - Masayoshi Mita",
}

export default function ExperiencePage() {
  return (
    <>
      <Title title="Experience" subtitle="職務実績" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <h1 className="text-2xl font-bold mb-6">職務実績</h1>
          </section>

          <section className="my-8">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                マンションの
                <Link href="https://aisc.ga-tech.co.jp/research/data-science/home-value-estimate">価格予測AI</Link>
                の研究や賃料予測AIの研究およびそれらAIのAPIの開発・保守運用
              </li>
              <li>Treasure Dataによるデータ集計基盤の構築およびTableauによるダッシュボード開発</li>
              <li>
                営業活動の効率化のための社内向けWebアプリの開発および商談に対し割り当てるべきセールスの推薦システムの開発
              </li>
              <li>事故物件の性質に関する研究</li>
              <li>マンション賃料査定業務を効率化するSPAアプリの開発</li>
              <li>マンション管理組合 総会資料の自動読み取りSPAアプリの開発</li>
              <li>マンション共用部の設備の充実度合いの定量評価（スコアリング）の研究</li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}
