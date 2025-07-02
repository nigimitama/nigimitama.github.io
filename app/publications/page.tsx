import Link from "@/components/Link"
import Title from "../components/Title"

export const metadata = {
  title: "Publications - Masayoshi Mita",
}

export default function PublicationsPage() {
  return (
    <>
      <Title title="Publications" subtitle="論文・書籍など" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <h2 className="text-xl font-bold mb-6">📕書籍</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                不動産建設データ活用推進協会（2025）
                <Link href="https://bookplus.nikkei.com/atcl/catalog/25/05/12/02006/">『不動産AI成功パターン』</Link>
                、日経BP。
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    詳細：
                    <Link href="https://www.ga-tech.co.jp/news/8_nzh62a60f65i9/">
                      当社が執筆協力した書籍「不動産AI成功パターン」発刊のお知らせ | ニュース | 株式会社GA technologies
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                安藤道人 & 三田匡能
                <Link href="https://michihito-ando.github.io/econome_ml_with_R/">「Rで学ぶ計量経済学と機械学習」</Link>
                （Web資料）
              </li>

              <li>
                <Link href="https://zenn.dev/nigimitama/books/aws-sam-introduction">
                  「AWS SAMによるサーバレスアプリケーション開発入門」
                </Link>
                （Web資料 / Zenn Book）
              </li>
            </ul>
          </section>

          <section className="my-8">
            <h2 className="text-xl font-bold mb-6">🎓️論文・学会発表</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                Bramson, A., & Mita, M. (2024, July).{" "}
                <Link href="https://ieeexplore.ieee.org/document/10633673">
                  Explicable Machine Learning Models Using Rich Geospatial Data.
                </Link>{" "}
                In 2024 IEEE 48th Annual Computers, Software, and Applications Conference (COMPSAC) (pp. 2381-2386).
                IEEE.
              </li>
              <li>
                宋宛丘, 尾𥔎幸謙, 山内翔大, 三田匡能, & 福中公輔. (2024).{" "}
                <Link href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_2O4OS25a03/_article/-char/ja/">
                  機械学習を用いた物件設備スコアの推定: 不動産データを使用したケーススタディ.
                </Link>{" "}
                In 人工知能学会全国大会論文集 第 38 回 (2024). 一般社団法人 人工知能学会.
              </li>
              <li>
                Bramson Aaron & 三田匡能. (2024).{" "}
                <Link href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_2O4OS25a02/_article/-char/ja">
                  地理空間ネットワークデータと機械学習を用いた説明可能性の高い賃料予測.
                </Link>{" "}
                In 人工知能学会全国大会論文集 第 38 回 (2024). 一般社団法人 人工知能学会.
              </li>
              <li>
                福中公輔, 橋本武彦, 橋本明広, 栗田一生, & 三田匡能. (2020).{" "}
                <Link href="https://www.ipsj.or.jp/dp/contents/publication/43/S1103-S02.html">
                  情報の非対称性の解消に向けた中古マンション価格推定の取り組み.
                </Link>{" "}
                デジタルプラクティス, 11(3), 475-488.
              </li>
              <li>
                三田匡能. (2020).{" "}
                <Link href="https://www.jstage.jst.go.jp/article/pbsj/48/0/48_104/_article/-char/ja/">
                  高価格物件を考慮した中古マンションの売買価格予測
                  ―ドメイン知識に基づいたルールベースと機械学習の融合による小サンプルデータの学習―.
                </Link>{" "}
                In 日本行動計量学会大会抄録集 48 (pp. 104-107). 日本行動計量学会.
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}
