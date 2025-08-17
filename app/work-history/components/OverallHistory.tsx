import Timeline, { TimelineItem } from "@/components/Timeline"
import { ProjectsAtGA } from "./ProjectsAtGA"

export const OverallHistory = () => {
  const timelineData: TimelineItem[] = [
    {
      color: "blue",
      date: "2019-04 ~ 現在も在籍",
      title: "株式会社GA technologies",
      content: (
        <div className="text-gray-500">
          <section className="mb-2">
            <p className="mb-2">
              研究開発組織 AI Strategy Centerにてデータサイエンティストとして入社。
              <br />
              入社前は分析のみを行う想定だったが、研究結果を実装することも求められて開発業務も行うことに。
            </p>

            <p className="mb-2">2021年頃からはチーフに昇格し、メンバーの育成やプロジェクトのリードも担うようになる。</p>
          </section>

          <section className="mb-2 bg-gray-100 p-4 mt-4 rounded">
            <h4 className="font-semibold mb-2">入社後に関わった主なプロジェクト</h4>
            <ProjectsAtGA />
          </section>
        </div>
      ),
    },
    {
      color: "blue",
      date: "2020-04 ~ 2023-03",
      title: "電気通信大学 非常勤講師（副業）",
      content: (
        <div className="text-gray-500">
          <p className="mb-2">データアントレプレナーフェロープログラム（DEFP）の回帰モデル構築の演習を担当</p>
        </div>
      ),
      link: {
        href: "/lectures",
        text: "講義",
      },
    },
    {
      color: "blue",
      date: "2023-04 ~ 2024-03",
      title: "立教大学 非常勤講師（副業）",
      content: (
        <div className="text-gray-500">
          <p className="mb-2">経済学部にて計量経済学と機械学習をRで演習する講義「データサイエンス概論」を担当</p>
        </div>
      ),
      link: {
        href: "/lectures",
        text: "講義",
      },
    },
  ]

  return <Timeline items={timelineData} />
}
