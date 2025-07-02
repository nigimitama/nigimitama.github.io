import Link from "@/components/Link"
import Title from "../components/Title"

export const metadata = {
  title: "Apps - Masayoshi Mita",
}

export default function AppsPage() {
  return (
    <>
      <Title title="Apps" subtitle="（プライベートで）作ったもの" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <h1 className="text-2xl font-bold mb-6">作ったもの</h1>
          </section>

          <section className="my-8">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                不動産建設データ活用推進協会（2025）
                <Link href="https://bookplus.nikkei.com/atcl/catalog/25/05/12/02006/">『不動産AI成功パターン』</Link>
                、日経BP。
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    詳細：
                    <Link href="https://www.ga-tech.co.jp/news/8_nzh62a60f65i9/">
                      当社が執筆協力した書籍「不動産AI成功パターン」発刊のお知らせ | ニュース | 株式会社GA technologies
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}
