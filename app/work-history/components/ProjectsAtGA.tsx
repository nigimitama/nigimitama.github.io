import { ExternalLinkButton } from "./ExternalLinkButton"
import ModalTimeline, { TimelineItem } from "./ModalTimeline"

export const ProjectsAtGA = () => {
  const timelineData: TimelineItem[] = [
    {
      date: "2019-07 ~ 2025-07",
      title: "マンションの価格予測AI・賃料予測AIの研究開発とAPI開発",
      description:
        "社内に対しては査定業務を効率化し、社外に対しては無料AI査定サービス（[RENOSY AI査定](https://www.renosy.com/sell)）により集客の接点を増やすことに貢献した。",
      tags: ["機械学習", "API開発", "AWS Lambda", "CircleCI"],
      content: (
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-500">関連リンク</h4>
          <div className="flex flex-wrap gap-2">
            <ExternalLinkButton
              text="価格査定AI  | AI Strategy Center"
              href="https://aisc.ga-tech.co.jp/research/data-science/home-value-estimate"
            />

            <ExternalLinkButton
              text="価格査定AIの開発で直面した課題と工夫した点 （Speaker Deck）"
              href="https://speakerdeck.com/itandi/bizinesudenojia-zhi-chuang-zao-detasaiensunoji-ben-gai-nian-toshi-jian?slide=40"
            />
            <ExternalLinkButton
              text="情報の非対称性の解消に向けた中古マンション価格推定の取り組み（情報処理学会）"
              href="https://www.ipsj.or.jp/dp/contents/publication/43/S1103-S02.html"
            />
            <ExternalLinkButton
              text="高価格物件を考慮した中古マンションの売買価格予測（日本行動計量学会）"
              href="https://www.jstage.jst.go.jp/article/pbsj/48/0/48_104/_article/-char/ja/"
            />
          </div>
        </div>
      ),
      color: "blue",
    },
    {
      color: "blue",
      date: "2020-06 ~ 2020-08",
      title: "データ集計基盤の構築・ダッシュボード開発",
      description: `マネージャー・経営陣のKPI把握のためのダッシュボード作成に従事`,
      tags: ["Treasure Data", "Tableau", "SQL"],
    },
    {
      color: "blue",
      date: "2020-08 ~ 2024-10",
      title: "データに基づく営業部門の効率化",
      description:
        "営業活動の最適化を支援するアプリやレコメンデーションモデルを開発し、顧客体験と成約率の向上に寄与した",
      tags: ["機械学習", "推薦システム", "Ruby on Rails"],
    },
    {
      color: "green",
      date: "2021 ~ ",
      title: "研修コンテンツ作成・運用",
      description: "メンバーの専門知識向上のための社内研修コンテンツの作成・運用により、部署全体のスキルアップに貢献",
      tags: ["育成"],
    },
    // {
    //   color: "blue",
    //   date: "2023-05 ~ 2023-11",
    //   title: "事故物件が賃料や空室期間に与える影響の分析",
    //   description: "事故物件の資産価値への影響を調査し、交渉のエビデンスとして貢献",
    //   tags: ["統計的因果推論"],
    // },
    {
      color: "blue",
      date: "2023-06 ~",
      title: "マンションのスコアリング",
      description:
        "マンションの設備の充実度や仕様から想起される「グレード感」を定量評価する研究。そのためのマンションの設備仕様に関するデータ整備も実施。",
      tags: ["機械学習", "項目反応理論（IRT）"],
      content: (
        <div className="mb-6">
          <h4 className="font-semibold mb-2">関連リンク</h4>
          <div className="flex flex-wrap gap-2">
            <ExternalLinkButton
              text="機械学習を用いた物件設備スコアの推定（JSAI2024）"
              href="https://doi.org/10.11517/pjsai.JSAI2024.0_2O4OS25a03"
            />
            <ExternalLinkButton
              text="項目反応理論を用いたマンション共用部のスコアリング（日本不動産学会2025）"
              href="https://www.jares.or.jp/papers/papers40_2025.html"
            />
          </div>
        </div>
      ),
    },
    {
      color: "blue",
      date: "2023-11 ~",
      title: "書類読み取りAIの研究開発", // 建物管理データやマイソクなど
      description: "不動産に関する書類のスキャン画像を読み取り、構造化するAIの研究およびアプリ開発",
      tags: ["非構造データからの情報抽出", "AI-OCR", "React", "Python"],
    },
    {
      color: "blue",
      date: "2024-06 ~ ",
      title: "マンション賃料査定業務の補助ツール",
      description: "賃料査定業務を効率化する社内向けSPAを開発し、大幅な工数削減を実現",
      tags: ["TypeScript", "React", "Python"],
    },
  ]

  return <ModalTimeline items={timelineData} />
}
