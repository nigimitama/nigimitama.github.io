import Title from "../components/Title"

import { OverallHistory } from "./components/OverallHistory"

export const metadata = {
  title: "職務経歴 - Masayoshi Mita",
}

export default function WorkHistoryPage() {
  return (
    <>
      <Title title="Work History" subtitle="職務経歴" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <OverallHistory />
        </article>
      </main>
    </>
  )
}
