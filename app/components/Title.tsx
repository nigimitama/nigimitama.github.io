export default function Title({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="w-stretch p-8 bg-gradient-to-r from-gray-100 to-blue-0">
      <h1 className="text-2xl text-gray-700 font-bold">{title}</h1>
      <span className="text-lg text-gray-500">{subtitle}</span>
    </section>
  )
}
