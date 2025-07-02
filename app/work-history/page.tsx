import Title from "../components/Title"

import { ExternalLinkButton } from "./components/ExternalLinkButton"
import ModalTimeline, { TimelineItem } from "./components/ModalTimeline"

export const metadata = {
  title: "Work History - Masayoshi Mita",
}

export default function WorkHistoryPage() {
  const timelineData: TimelineItem[] = [
    {
      date: "2019-07 ~ 2025-07",
      title: "マンションの価格予測AI・賃料予測AIの研究開発",
      markdown: `
## 概要

中古不動産は価値を正しく評価することが重要であるため、業務フロー上で価格査定業務が必要になる。査定を行うAIを開発することで社内に対しては業務を効率化し、社外に対しては無料AI査定サービス（[RENOSY AI査定](https://www.renosy.com/sell)）により集客の接点を増やすことに貢献した。

## 方法

1. 予測モデルの研究（LightGBMと自作アルゴリズムを利用）
2. APIの開発（AWS Lambda + API Gateway）
3. 毎月新しいデータで予測モデルを学習し直すバッチ処理（AWS Fargate）
4. CI/CDパイプラインの設定（CircleCI）

の開発を行い、現在も保守運用を続けている。

## 成果
業務効率化により顧客獲得単価（CPA）は大きく削減された。
またtoC向けのAI査定サービス経由での契約獲得にも貢献している。

## プロジェクトの規模や自身の役割
最初の1年ほどは1人で関係者へのヒアリングから研究・開発まで行っていた。
途中からはメンバーを1~2人抱えて対応エリアの拡張や機能追加などをリードしていった。
2025年頃から徐々に別のメンバーへ引き継いでいった。

## 利用技術
Python, AWS, Docker, CircleCI, Rollbar
`,
      content: (
        <div className="mb-6">
          <h4 className="font-semibold mb-2">関連リンク</h4>
          <div className="flex flex-wrap gap-2">
            <ExternalLinkButton
              text="価格査定AI  | AI Strategy Center"
              href="https://aisc.ga-tech.co.jp/research/data-science/home-value-estimate"
            />

            <ExternalLinkButton
              text="情報の非対称性の解消に向けた中古マンション価格推定の取り組み（情報処理学会）"
              href="https://www.ipsj.or.jp/dp/contents/publication/43/S1103-S02.html"
            />

            <ExternalLinkButton
              text="価格査定AIの開発で直面した課題と工夫した点 （Speaker Deck）"
              href="https://speakerdeck.com/itandi/bizinesudenojia-zhi-chuang-zao-detasaiensunoji-ben-gai-nian-toshi-jian?slide=40"
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
      markdown: `
## 概要

KPI把握のための数字の管理がGoogle Sheetsで手作業で行われている事業部があり、KPI集計の自動化を行った。SFAツールのDBからTreasure Dataへデータを出力して集計を行い、Tableau上に表示するようにした。

また各営業担当者の売上のランキングを毎日Slackに通知する作業もGoogle Apps Scriptで自動化した。

## 工夫した点
「数字が現場の肌感と合わない」と言われることがあったため、集計の内訳（集計元のレコードが並んだ表）を表示する画面も作成し、透明性の高い集計を行うよう努めることで集計の定義の細かな差異を発見することができ、現場の感覚値と合う集計を実現した。

## プロジェクト規模など
1人でヒアリングから実装まで行った

## 利用技術
SQL, Tableau, Google App Script, TreasureData
`,
    },
    {
      color: "blue",
      date: "2020-08 ~ 2024-10",
      title: "営業担当者の割り振りの効率化",
      markdown: `
## 概要

営業部門において「このお客様の営業担当を誰にするか」の割り振りが毎日行われており、その際はCRMツールからGoogle Sheetsにコピー＆ペーストして管理し、Google Calendarで各セールスのスケジュールの空きを確認しながら作業されていた。

この業務を効率化するため、割り振りの参考になる情報を表示するアプリをRuby on Railsで開発した。そのアプリには、スケジュールの空き状況や過去の売上実績を基にした「このお客様におすすめのセールス」を表示する機能を実装した。

また、セールスの割り振りを行うマネジメント層の関心のあるデータも表示するようにした。例えば「現状のアポイントメント数から想定される今週の予測売上金額」を表示する機能を実装した。
（このような予測系の機能はPythonで開発し、Serverless FrameworkでAWSにデプロイした）

## 成果
マネジメント層の業務効率化、成約率向上

## プロジェクト規模や自身の役割
当初は1人でヒアリングから実装まですべて行っていた。
開始から1年ほど経ってからは時期によっては別のメンバーが1~2人配属され、リードしていくことになった。
2024年頃から徐々に別のメンバーへ引き継いでいった。

## 利用技術
Ruby on Rails, Python

`,
    },
    {
      color: "blue",
      date: "2023-05 ~ 2023-11",
      title: "事故物件が賃料や空室期間に与える影響の分析",
      markdown: `
## 背景
事故物件となった住戸や事故物件を含むマンションの別の住戸についてさえも忌避感を抱く不動産投資家や金融機関が一部存在している。

しかし、実際にそのような物件（同じマンションに属しているというだけで直接事故の影響は受けていない物件）が事故によって「投資物件としての資産価値」が毀損されているのかどうかを明らかにしたい。

本プロジェクトでは「事故があったマンションの事故発生の前後での賃料や空室期間の差」と「そのマンションの周辺の類似物件における事故発生の前後での賃料や空室期間の差」の差に着目するように分析し、事故の資産価値への影響を調べた。

## 成果
限られたデータではあるものの一定の結論が得られ、交渉のエビデンスとして貢献した

## 使用技術
統計的因果推論
`,
    },
    {
      color: "blue",
      date: "2023-06 ~ 2023-11",
      title: "マンション専有部のスコアリング",
      markdown: `
## 概要
マンションには「浴室タイプ（3点ユニットバスや独立洗面台など）」や「キッチン（システムキッチンやミニキッチンなど）」などの様々な設備が存在し、それらの総合的な優劣感を「グレード感」として賃料査定の現場では（熟練した社員を中心に）重視されている。

このグレード感を再現し、データから定量評価できるようにする研究を行った。

## 成果
研究成果は人工知能学会にて発表を行った。

その後はマンションの共用部のグレードを含めて評価できるように拡張する研究に取り組み、研究とビジネスへの応用を検討している。

## プロジェクトにおける役割
具体的な作業は1人の私以外のメンバーが担当した。私はリーダーあるいはメンターのような立場で関わり、プロジェクトの方針のディスカッションを行ったり、ビジネス部門とのミーティングに同席したり、分析方針のアドバイスを行ったり、共同研究者の対応などのサポートを行った。
`,
      content: (
        <div className="mb-6">
          <h4 className="font-semibold mb-2">関連リンク</h4>
          <div className="flex flex-wrap gap-2">
            <ExternalLinkButton
              text="機械学習を用いた物件設備スコアの推定: 不動産データを使用したケーススタディ"
              href="https://doi.org/10.11517/pjsai.JSAI2024.0_2O4OS25a03"
            />
          </div>
        </div>
      ),
    },
    {
      color: "blue",
      date: "2024-06 ~ ",
      title: "マンション賃料査定業務の補助ツール",
      markdown: `
## 概要
賃料査定業務を効率化する社内向けツールの開発を行い、45%程度の工数削減を実現した。

## 背景
賃料査定業務では、人力による家賃査定により毎月多くの時間が費やされている。
事業規模拡大に対してスケーラブルにするため、また生産性向上・利益率向上のためにも省力化が求められている。

## 方法
査定の参考になる情報を集約したアプリを提供した。主に次の情報を提供している：

- AIによる予測値（機械学習ベースのものと、熟練の査定者のロジックをもとにしたルールベースの2種類）
- 過去の同マンションや類似物件の取引事例データ
- 物件の長所：近隣の店舗など
- 物件の短所：事故物件の情報、ハザードマップの情報など

## 使用技術
以下の技術を利用してSPAを開発した

- ホスティング：AWS Amplify
- 認証：AWS Cognito
- データストア：AWS DynamoDB, S3
- API：AWS API Gateway + Lambda (AWS SAMで管理)
- フロントエンド：TypeScript + React

## 成果
- 査定担当者の体感ベースで45%程度の工数削減を実現
- 納会にて表彰される程度には感謝された

## プロジェクトにおける役割
当該部署とのヒアリング・要件定義、プロジェクトマネジメントから開発まですべてを1人で行っている。
他のメンバーが開発したアプリたちと連携した機能も存在し、それらを実装する際は当該メンバーにビジネスサイドの要求仕様を伝えて開発してもらうこともあった。
`,
    },
    {
      color: "blue",
      date: "2025-01 ~ ",
      title: "マンション共用部のスコアリング",
      markdown: `
## 概要
マンションの共用部の設備（エレベーター、宅配ボックス、etc.）や仕様（免震構造、二重床、etc.）などの特性から推測される「造りの良さ」「グレード感」のような概念を定量評価する研究を行った。

## 成果
- 論文投稿・学会発表により会社のプレゼンス向上に貢献

## プロジェクトにおける役割
プロジェクトのリードも主な作業も1人で行った。筑波大学と共同研究し、アドバイスを受けながら研究を進めた。

## 使用技術
テスト理論・項目反応理論
`,
    },
  ]

  return (
    <>
      <Title title="Work History" subtitle="職務経歴" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <ModalTimeline items={timelineData} />
          </section>
        </article>
      </main>
    </>
  )
}
