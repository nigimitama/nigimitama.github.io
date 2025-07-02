import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "@/components/Link"
import { FaExternalLinkAlt } from "react-icons/fa"
import Title from "../components/Title"

export const metadata = {
  title: "講義等 - Masayoshi Mita",
}

export default function LecturesPage() {
  const data = [
    {
      title: "放送大学「多変量データ分析実践の基礎」登壇",
      year: "2023年 ~ ",
      href: "https://bangumi.ouj.ac.jp/v4/bslife/detail/01AC2011.html",
      desc: "回帰分析の社会実装に関するパートで登壇",
    },
    {
      title: "2023年度 立教大学 「データサイエンス概論」",
      year: "2023年度",
      href: "/lectures/2023-data-science",
      desc: "計量経済学と機械学習の演習",
    },
    {
      title: "電気通信大学 データアントレプレナー フェロープログラム 「回帰モデル作成」",
      year: "2022年度",
      href: "https://de.uec.ac.jp/2022/06/16/10422/",
      desc: "Pythonによる賃料予測モデルの作成演習",
    },
    {
      title: "電気通信大学 データアントレプレナー フェロープログラム 「回帰モデル作成」",
      year: "2021年度",
      href: "https://de.uec.ac.jp/2021/06/18/9054/",
      desc: "Pythonによる賃料予測モデルの作成演習",
    },
    {
      title:
        "電気通信大学 データアントレプレナー フェロープログラム 「ケース研究 不動産」「データサイエンス100本ノック」",
      year: "2020年度",
      href: "https://de.uec.ac.jp/2020/07/11/7258/",
      desc: "不動産業界におけるデータ活用の紹介とPythonの演習による実践的な講義",
    },
  ]

  return (
    <>
      <Title title="Lectures" subtitle="講義" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            {data.map((item, index) => {
              const isExternal = item.href.startsWith("http")
              const icon = isExternal ? <FaExternalLinkAlt /> : null
              return (
                <Link href={item.href} className="text-lg" key={index}>
                  <Card key={index} className="mb-4 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          {icon}
                          <span>{item.title}</span>
                        </div>
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-2">{item.year}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </section>
        </article>
      </main>
    </>
  )
}
