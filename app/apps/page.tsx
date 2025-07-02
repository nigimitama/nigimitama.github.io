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
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100">01</div>
              <div className="bg-gray-100 col-span-2">03</div>
              <div className="bg-gray-100">01</div>
              <div className="bg-gray-100">01</div>
              <div className="bg-gray-100">01</div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
