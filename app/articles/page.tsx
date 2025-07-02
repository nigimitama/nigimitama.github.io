import Title from "../components/Title"
import { ArticleLink, ArticleLinkProps } from "./components/ArticleLink"

export const metadata = {
  title: "Articles - Masayoshi Mita",
}

export default function ArticlesPage() {
  const articles: ArticleLinkProps[] = [
    {
      date: "2025-06",
      href: "https://note.com/fine_coot1374/n/n250cbf6e93c8",
      title: "【学会参加レポート】JSAI2025に参加しました！",
      category: "会社のブログ",
      tags: ["学会"],
    },
    {
      date: "2025-06",
      href: "https://xtech.nikkei.com/atcl/nxt/column/18/03210/052800001/",
      title: "GA technologiesがAIで不動産の調達業務を効率化、賃料査定ツールを開発した経緯 | 日経クロステック（xTECH）",
      category: "Web記事",
      tags: ["データサイエンス"],
    },
  ]

  return (
    <>
      <Title title="Articles" subtitle="ブログ記事など" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <h1 className="text-2xl font-bold mb-6">その他の活動</h1>
          </section>

          <section className="my-8">
            {articles.map((article, index) => (
              <ArticleLink
                key={index}
                date={article.date}
                href={article.href}
                title={article.title}
                category={article.category}
                tags={article.tags}
              />
            ))}

            <ul className="list-disc pl-6 space-y-4">
              <li>
                2024-11
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/n83022232ba9f" className="text-blue-600 hover:underline">
                  LambdaのベースイメージをslimイメージからAWSベースイメージに置き換えてコールドスタートを改善した話
                </a>
              </li>
              <li>
                2024-09
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/n10ee12d0856b" className="text-blue-600 hover:underline">
                  AWS Lambdaのコールドスタートはコンテナイメージを使うと悪化するのか
                </a>
              </li>
              <li>
                2024-08
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/cute_daphne569/n/nab40180172f0" className="text-blue-600 hover:underline">
                  SSII2024参加レポート
                </a>
              </li>
              <li>
                2024-07
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/nade7578fb861" className="text-blue-600 hover:underline">
                  【学会参加レポート】IEEEの国際会議「COMPSAC 2024」に参加しました！
                </a>
              </li>
              <li>
                2024-06
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/hao_wang/n/n0b810b40d766" className="text-blue-600 hover:underline">
                  【JSAI2024 参加レポート】 AISCの研究結果の発表や企業ブースの様子をお届けします！
                </a>
              </li>
              <li>
                2024-04
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/n30ecbb0ed360" className="text-blue-600 hover:underline">
                  NumPyはどうやって逆行列を計算しているのか
                </a>
              </li>
              <li>
                2024-01
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/ndd3e1a98ac0f" className="text-blue-600 hover:underline">
                  【Pythonで統計モデル】SEM7：PLSモデル
                </a>
              </li>
              <li>
                2023-09
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/nc865d10a0c23" className="text-blue-600 hover:underline">
                  【Pythonで統計モデル】SEM4：パス解析（非逐次モデル）
                </a>
              </li>
              <li>
                2023-09
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/nb4203268692a" className="text-blue-600 hover:underline">
                  日本行動計量学会 第51回大会に参加しました！
                </a>
              </li>
              <li>
                2023-07
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/n3d7388449914" className="text-blue-600 hover:underline">
                  "ASPIRE: Air Shipping Recommendation for E-commerce Products via Causal Inference Framework"を読んだ
                </a>
              </li>
              <li>
                2023-06
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">取材</span>
                <a
                  href="https://www.itmedia.co.jp/news/articles/2306/01/news149.html"
                  className="text-blue-600 hover:underline"
                >
                  不動産テック企業で働くみんなのデスク環境　CEOからAIエンジニアまで写真でチェック：IT企業デスクツアー（1/5
                  ページ） - ITmedia NEWS
                </a>
              </li>
              <li>
                2023-06
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/gentle_gerbil749/n/nc291d36e2813" className="text-blue-600 hover:underline">
                  【JSAI2023 参加レポート】 AISCのDX推進活動の発表や企業ブースの様子をお届けします！
                </a>
              </li>
              <li>
                2023-06
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                <a href="https://note.com/kind_ixia1/n/neecec3299032" className="text-blue-600 hover:underline">
                  【資料公開】ITANDIと合同でデータサイエンスに関するセミナーを行いました
                </a>
              </li>
              <li>
                2023-05
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">イベント</span>
                <a href="https://itandidata.peatix.com/view" className="text-blue-600 hover:underline">
                  ＜ビジネスでの価値創造＞データサイエンスの基本概念と実践 | Peatix
                </a>
              </li>
              <li>
                2021-04
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">取材</span>
                <a
                  href="https://www.datascientist.or.jp/news/tbdatascientistbook/"
                  className="text-blue-600 hover:underline"
                >
                  一般社団法人データサイエンティスト協会 2022年度版就活ガイドブックにインタビューが掲載
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}
