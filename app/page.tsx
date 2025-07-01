import Image from "next/image"
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4">
        <article className="my-8">
          <section className="my-8 py-8 flex flex-col lg:flex-row justify-start items-start gap-6">
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <Image src="/me.jpg" alt="顔写真" width={200} height={200} className="rounded-lg object-cover" priority />
            </div>
            <div className="flex-grow">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-medium mb-2">三田匡能</h1>
                <p className="text-sm text-gray-600">Masayoshi Mita</p>
              </div>

              <div className="py-3">
                株式会社GA technologies{" "}
                <a href="https://aisc.ga-tech.co.jp/team/m_mita" className="text-blue-600 hover:underline">
                  Data Scientist
                </a>
              </div>

              <div className="py-3 flex gap-2">
                <a
                  href="https://www.linkedin.com/in/masayoshi-mita/"
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nigimitama"
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <hr className="my-8" />

          <section className="my-8">
            <div>
              <h2 className="text-lg font-bold mb-4">職務実績</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  マンションの
                  <a
                    href="https://aisc.ga-tech.co.jp/research/data-science/home-value-estimate"
                    className="text-blue-600 hover:underline"
                  >
                    価格予測AI
                  </a>
                  の研究や賃料予測AIの研究およびそれらAIのAPIの開発・保守運用
                </li>
                <li>Treasure Dataによるデータ集計基盤の構築およびTableauによるダッシュボード開発</li>
                <li>
                  営業活動の効率化のための社内向けWebアプリの開発および商談に対し割り当てるべきセールスの推薦システムの開発
                </li>
                <li>事故物件の性質に関する研究</li>
                <li>マンション賃料査定業務を効率化するSPAアプリの開発</li>
                <li>マンション管理組合 総会資料の自動読み取りSPAアプリの開発</li>
                <li>マンション共用部の設備の充実度合いの定量評価（スコアリング）の研究</li>
              </ul>
            </div>

            <div className="my-8">
              <h2 className="text-lg font-bold mb-4">研究・発表</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Bramson, A., & Mita, M. (2024, July).{" "}
                  <a
                    href="https://ieeexplore.ieee.org/document/10633673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Explicable Machine Learning Models Using Rich Geospatial Data.
                  </a>{" "}
                  In 2024 IEEE 48th Annual Computers, Software, and Applications Conference (COMPSAC) (pp. 2381-2386).
                  IEEE.
                </li>
                <li>
                  宋宛丘, 尾𥔎幸謙, 山内翔大, 三田匡能, & 福中公輔. (2024).{" "}
                  <a
                    href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_2O4OS25a03/_article/-char/ja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    機械学習を用いた物件設備スコアの推定: 不動産データを使用したケーススタディ.
                  </a>{" "}
                  In 人工知能学会全国大会論文集 第 38 回 (2024). 一般社団法人 人工知能学会.
                </li>
                <li>
                  Bramson Aaron & 三田匡能. (2024).{" "}
                  <a
                    href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_2O4OS25a02/_article/-char/ja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    地理空間ネットワークデータと機械学習を用いた説明可能性の高い賃料予測.
                  </a>{" "}
                  In 人工知能学会全国大会論文集 第 38 回 (2024). 一般社団法人 人工知能学会.
                </li>
                <li>
                  福中公輔, 橋本武彦, 橋本明広, 栗田一生, & 三田匡能. (2020).{" "}
                  <a
                    href="https://www.ipsj.or.jp/dp/contents/publication/43/S1103-S02.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    情報の非対称性の解消に向けた中古マンション価格推定の取り組み.
                  </a>{" "}
                  デジタルプラクティス, 11(3), 475-488.
                </li>
                <li>
                  三田匡能. (2020).{" "}
                  <a
                    href="https://www.jstage.jst.go.jp/article/pbsj/48/0/48_104/_article/-char/ja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    高価格物件を考慮した中古マンションの売買価格予測
                    ―ドメイン知識に基づいたルールベースと機械学習の融合による小サンプルデータの学習―.
                  </a>{" "}
                  In 日本行動計量学会大会抄録集 48 (pp. 104-107). 日本行動計量学会.
                </li>
              </ul>
            </div>

            <div className="my-8">
              <h2 className="text-lg font-bold mb-4">講義</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  2023年度 立教大学 「
                  <a href="/lectures" className="text-blue-600 hover:underline">
                    データサイエンス概論
                  </a>
                  」
                </li>
                <li>
                  2023年度 放送大学「
                  <a
                    href="https://bangumi.ouj.ac.jp/v4/bslife/detail/01AC2011.html"
                    className="text-blue-600 hover:underline"
                  >
                    多変量データ分析実践の基礎
                  </a>
                  」登壇
                </li>
                <li>
                  2022年度 電気通信大学 データアントレプレナー フェロープログラム 「
                  <a href="https://de.uec.ac.jp/2022/06/16/10422/" className="text-blue-600 hover:underline">
                    回帰モデル作成
                  </a>
                  」
                </li>
                <li>
                  2021年度 電気通信大学 データアントレプレナー フェロープログラム 「
                  <a href="https://de.uec.ac.jp/2021/06/18/9054/" className="text-blue-600 hover:underline">
                    回帰モデル作成
                  </a>
                  」
                </li>
                <li>
                  2020年度 電気通信大学 データアントレプレナー フェロープログラム 「
                  <a href="https://de.uec.ac.jp/2020/07/11/7258/" className="text-blue-600 hover:underline">
                    ケース研究 不動産
                  </a>
                  」「
                  <a href="https://de.uec.ac.jp/2020/07/11/7237/" className="text-blue-600 hover:underline">
                    データサイエンス100本ノック
                  </a>
                  」
                </li>
              </ul>
            </div>

            <div className="my-8">
              <h2 className="text-lg font-bold mb-4">書籍</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  不動産建設データ活用推進協会（2025）
                  <a
                    href="https://bookplus.nikkei.com/atcl/catalog/25/05/12/02006/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    『不動産AI成功パターン』
                  </a>
                  、日経BP。
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      詳細：
                      <a
                        href="https://www.ga-tech.co.jp/news/8_nzh62a60f65i9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        当社が執筆協力した書籍「不動産AI成功パターン」発刊のお知らせ | ニュース | 株式会社GA
                        technologies
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="my-8">
              <h2 className="text-lg font-bold mb-4">その他の活動</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  2025-06
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">会社Blog</span>
                  <a href="https://note.com/fine_coot1374/n/n250cbf6e93c8" className="text-blue-600 hover:underline">
                    【学会参加レポート】JSAI2025に参加しました！
                  </a>
                </li>
                <li>
                  2025-06
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs mx-2">Web記事</span>
                  <a
                    href="https://xtech.nikkei.com/atcl/nxt/column/18/03210/052800001/"
                    className="text-blue-600 hover:underline"
                  >
                    GA technologiesがAIで不動産の調達業務を効率化、賃料査定ツールを開発した経緯 |
                    日経クロステック（xTECH）
                  </a>
                </li>
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
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
