import Title from "../components/Title"

export const metadata = {
  title: "About - Masayoshi Mita",
}

export default function AboutPage() {
  return (
    <>
      <Title title="About" subtitle="プロフィール" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <img src="/me.jpg" alt="顔写真" width={200} height={200} className="rounded-lg object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold">三田匡能</span>
                  <span className="text-lg text-gray-500">Masayoshi Mita</span>
                </div>
                <div>
                  <p className="text-gray-600 mb-4">Data Scientist</p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-2">
                  機械学習を用いた予測モデルの構築、統計学・計量経済学を利用した効果検証、テスト理論を応用したスコアリング、Webアプリケーション開発などを行っています。
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  企画・要件定義から開発（インフラ・バックエンド・フロントエンド）・運用まで1人で担当しています。
                </p>
              </div>
            </div>
          </section>

          <section className="my-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">スキル・興味分野</h2>
            <SkillTags />
          </section>

          <section className="my-10">
            <h2 className="text-xl font-bold text-gray-800 mb-2">経歴</h2>
            <History />
          </section>
        </article>
      </main>
    </>
  )
}

import Timeline, { TimelineItem } from "@/components/Timeline"
import Tags from "@/components/Tags"

const History = () => {
  const timelineData: TimelineItem[] = [
    {
      date: "2019-03",
      title: "大学卒業",
      content: (
        <div className="text-gray-500">
          <p className="mb-2">立教大学 経済学部 経済政策学科を卒業。</p>

          <p className="mb-2">
            大学時代はデータ分析に興味を持ち、独学で機械学習を勉強したり、大学院の計量経済学（統計的因果推論）の授業に参加させてもらって勉強していた。
          </p>

          <p className="mb-2">
            卒業論文ではかつて過疎化対策のため行われていた交付金の効果を検証するためFuzzy RDデザインによる分析を行った。
          </p>
        </div>
      ),
      color: "blue",
    },
    {
      date: "2019-04",
      title: "株式会社GA technologies 入社",
      content: (
        <div className="text-gray-500">
          <p className="mb-2">
            研究開発組織 AI Strategy Centerにてデータサイエンティストとして入社。
            <br />
            入社前は分析のみを行う想定だったが、研究結果を実装することも求められて開発業務も行うことに。
          </p>

          <p className="mb-2"></p>

          <p className="mb-2"></p>
        </div>
      ),
      color: "blue",
      link: {
        href: "/work-history",
        text: "職務経歴",
      },
    },
    {
      date: "2021-10",
      title: "チーフに昇格",
      description: "メンバーの育成や複数人プロジェクトのリードも担当するようになる",
      color: "blue",
    },
  ]

  return <Timeline items={timelineData} />
}

const SkillTags = () => {
  const skills = [
    "機械学習",
    "統計学",
    "計量経済学",
    "統計的因果推論",
    "テスト理論・スコアリング",
    "R",
    "Python",
    "SQL",
    "Webアプリ開発",
    "TypeScript",
    "Next.js",
    "Ruby on Rails",
    "AWS",
    "Serverless Architecture",
  ]

  return <Tags tags={skills} />
}
