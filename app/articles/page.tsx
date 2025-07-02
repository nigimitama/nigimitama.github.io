import Title from "../components/Title"
import { ArticleLink, ArticleLinkProps } from "./components/ArticleLink"
import { Card } from "@/components/ui/card"
import { SiQiita, SiZenn } from "react-icons/si"

export const metadata = {
  title: "Articles - Masayoshi Mita",
}

export default function ArticlesPage() {
  return (
    <>
      <Title title="Articles" subtitle="ブログ記事など" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-6">個人ブログ</h2>
            <PersonalBlog />
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-bold mb-6">会社のブログなど</h2>
            <TechBlog />
          </section>
        </article>
      </main>
    </>
  )
}

const PersonalBlog = () => {
  const blogs = [
    {
      title: "はてなブログ",
      href: "https://nigimitama.hatenablog.jp/",
    },
    {
      icon: <SiQiita />,
      title: "Qiita",
      href: "https://qiita.com/mitama",
    },
    {
      icon: <SiZenn />,
      title: "Zenn",
      href: "https://zenn.dev/nigimitama",
    },
  ]
  return (
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((e, index) => {
        return (
          <a key={index} href={e.href} target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-md hover:text-gray-400">
              <div className="flex items-center gap-2">
                {e.icon ?? ""}
                {e.title}
              </div>
            </Card>
          </a>
        )
      })}
    </div>
  )
}

const TechBlog = () => {
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
      title: "GA technologiesがAIで不動産の調達業務を効率化、賃料査定ツールを開発した経緯",
      category: "Web記事",
      tags: ["データサイエンス"],
    },
    {
      date: "2024-11",
      href: "https://note.com/kind_ixia1/n/n83022232ba9f",
      title: "LambdaのベースイメージをslimイメージからAWSベースイメージに置き換えてコールドスタートを改善した話",
      category: "会社のブログ",
      tags: ["アプリ開発", "AWS", "Lambda"],
    },
    {
      date: "2024-09",
      href: "https://note.com/kind_ixia1/n/n10ee12d0856b",
      title: "AWS Lambdaのコールドスタートはコンテナイメージを使うと悪化するのか",
      category: "会社のブログ",
      tags: ["アプリ開発", "AWS", "Lambda"],
    },
    {
      date: "2024-08",
      href: "https://note.com/cute_daphne569/n/nab40180172f0",
      title: "SSII2024参加レポート",
      category: "会社のブログ",
      tags: ["学会", "機械学習"],
    },
    {
      date: "2024-07",
      href: "https://note.com/kind_ixia1/n/nade7578fb861",
      title: "【学会参加レポート】IEEEの国際会議「COMPSAC 2024」に参加しました！",
      category: "会社のブログ",
      tags: ["学会", "機械学習"],
    },
    {
      date: "2024-06",
      href: "https://note.com/hao_wang/n/n0b810b40d766",
      title: "【JSAI2024 参加レポート】 AISCの研究結果の発表や企業ブースの様子をお届けします！",
      category: "会社のブログ",
      tags: ["学会", "機械学習"],
    },
    {
      date: "2024-04",
      href: "https://note.com/kind_ixia1/n/n30ecbb0ed360",
      title: "NumPyはどうやって逆行列を計算しているのか",
      category: "会社のブログ",
      tags: ["数学"],
    },
    {
      date: "2024-01",
      href: "https://note.com/kind_ixia1/n/ndd3e1a98ac0f",
      title: "【Pythonで統計モデル】SEM7：PLSモデル",
      category: "会社のブログ",
      tags: ["データサイエンス", "統計学"],
    },
    {
      date: "2023-09",
      href: "https://note.com/kind_ixia1/n/nc865d10a0c23",
      title: "【Pythonで統計モデル】SEM4：パス解析（非逐次モデル）",
      category: "会社のブログ",
      tags: ["データサイエンス", "統計学"],
    },
    {
      date: "2023-09",
      href: "https://note.com/kind_ixia1/n/nb4203268692a",
      title: "日本行動計量学会 第51回大会に参加しました！",
      category: "会社のブログ",
      tags: ["学会", "統計学"],
    },
    {
      date: "2023-07",
      href: "https://note.com/kind_ixia1/n/n3d7388449914",
      title: '"ASPIRE: Air Shipping Recommendation for E-commerce Products via Causal Inference Framework"を読んだ',
      category: "会社のブログ",
      tags: ["論文", "因果推論"],
    },
    {
      date: "2023-06",
      href: "https://www.itmedia.co.jp/news/articles/2306/01/news149.html",
      title: "不動産テック企業で働くみんなのデスク環境　CEOからAIエンジニアまで写真でチェック",
      category: "Web記事",
      tags: ["デスク環境"],
    },
    {
      date: "2023-06",
      href: "https://note.com/gentle_gerbil749/n/nc291d36e2813",
      title: "【JSAI2023 参加レポート】 AISCのDX推進活動の発表や企業ブースの様子をお届けします！",
      category: "会社のブログ",
      tags: ["学会"],
    },
    {
      date: "2023-06",
      href: "https://note.com/kind_ixia1/n/neecec3299032",
      title: "【資料公開】ITANDIと合同でデータサイエンスに関するセミナーを行いました",
      category: "会社のブログ",
      tags: ["データサイエンス", "セミナー"],
    },
    {
      date: "2023-05",
      href: "https://itandidata.peatix.com/view",
      title: "＜ビジネスでの価値創造＞データサイエンスの基本概念と実践",
      category: "イベント",
      tags: ["データサイエンス", "セミナー"],
    },
    {
      date: "2021-04",
      href: "https://www.datascientist.or.jp/news/tbdatascientistbook/",
      title: "一般社団法人データサイエンティスト協会 2022年度版就活ガイドブックにインタビューが掲載",
      category: "Web記事",
      tags: ["インタビュー"],
    },
  ]
  return (
    <>
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
    </>
  )
}
