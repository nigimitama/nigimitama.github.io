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
                <h2 className="text-xl font-semibold mb-4">三田匡能 (Masayoshi Mita)</h2>
                <p className="text-gray-700 mb-4">株式会社GA technologies Data Scientist</p>
                <p className="text-gray-700 leading-relaxed">
                  機械学習を用いた予測モデルの構築、統計学・計量経済学を利用した効果検証、テスト理論を応用したスコアリング、Webアプリケーション開発などを行っています。
                </p>

                <p>
                  立教大学経済学部卒業。大学時代は計量経済学（統計的因果推論）を勉強し過疎対策の効果を推定する研究を行っていた。在学中に統計学や機械学習に強い興味を持ち、ビジネスに活用したいと考え2019年に新卒入社。
                  入社後は中古マンションの価格・賃料予測AI、営業担当者の配置最適化AI、建物スコアリングなどの研究や、査定業務効率化アプリの開発、大学での講義などに従事。
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
