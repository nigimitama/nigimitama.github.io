export const metadata = {
  title: "2023年度 立教大学 「データサイエンス概論」 - Masayoshi Mita",
}

export default function DataScienceSyllabus() {
  return (
    <>
      <main className="container mx-auto px-4">
        <article className="my-8">
          <section className="my-8">
            <h1 className="text-2xl font-bold mb-6">2023年度 立教大学 「データサイエンス概論」</h1>
          </section>

          <section className="my-8">
            <p className="mb-6">
              教材として、安藤道人・三田匡能「
              <a href="https://michihito-ando.github.io/econome_ml_with_R/" className="text-blue-600 hover:underline">
                Rで学ぶ計量経済学と機械学習
              </a>
              」（ウェブ資料）を用いる。
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/01_elements.html"
                  className="text-blue-600 hover:underline"
                >
                  Rの基礎
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/02_data_wrangling.html"
                  className="text-blue-600 hover:underline"
                >
                  データ整理
                </a>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <a
                      href="https://michihito-ando.github.io/econome_ml_with_R/test_scores.xlsx"
                      className="text-blue-600 hover:underline"
                    >
                      test_scores.xlsx
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/03_EDA.html"
                  className="text-blue-600 hover:underline"
                >
                  データの可視化
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/04_OLS.html"
                  className="text-blue-600 hover:underline"
                >
                  回帰分析
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/05_OLS_Matching.html"
                  className="text-blue-600 hover:underline"
                >
                  計量経済学１：回帰分析とマッチング
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/06_IV.html"
                  className="text-blue-600 hover:underline"
                >
                  計量経済学２：操作変数法
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/07_RDD.html"
                  className="text-blue-600 hover:underline"
                >
                  計量経済学３：回帰不連続デザイン（+モンテカルロ・シミュレーション入門）
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/08_Fixed_Effects.html"
                  className="text-blue-600 hover:underline"
                >
                  計量経済学４：固定効果モデル
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/09_DID.html"
                  className="text-blue-600 hover:underline"
                >
                  計量経済学５：差の差(DID)法
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/10_OLS_logistic.html"
                  className="text-blue-600 hover:underline"
                >
                  機械学習１：線形回帰・ロジスティック回帰
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/11_Ridge_Lasso.html"
                  className="text-blue-600 hover:underline"
                >
                  機械学習２：リッジ回帰・Lasso
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/12_Tree.html"
                  className="text-blue-600 hover:underline"
                >
                  機械学習３：決定木・アンサンブル学習
                </a>
              </li>
              <li>
                <a
                  href="https://michihito-ando.github.io/econome_ml_with_R/13_NeuralNetwork.html"
                  className="text-blue-600 hover:underline"
                >
                  機械学習４：ニューラルネットワーク・ディープラーニング・大規模言語モデル
                </a>
              </li>
              <li>
                Appendix
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <a
                      href="https://michihito-ando.github.io/econome_ml_with_R/14_ChatGPT_API.html"
                      className="text-blue-600 hover:underline"
                    >
                      Web API / ChatGPTをRから使う
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://michihito-ando.github.io/econome_ml_with_R/14_Rmarkdown.html"
                      className="text-blue-600 hover:underline"
                    >
                      R Markdown
                    </a>
                  </li>
                </ul>
              </li>
            </ol>
          </section>
        </article>
      </main>
    </>
  )
}
