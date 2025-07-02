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
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold">三田匡能</span>
                  <span className="text-lg text-gray-500">Masayoshi Mita</span>
                </div>
                <div>
                  <p className="text-gray-600 mb-4">Data Scientist</p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-2">
                  機械学習を用いた予測モデルの構築、統計学・計量経済学を利用した効果検証、テスト理論を応用したスコアリング、Webアプリケーション開発などを行っています。
                </p>

                <p className="text-gray-700 leading-relaxed">
                  企画・要件定義から開発（インフラ・バックエンド・フロントエンド）・運用まで1人で担当しています。
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
