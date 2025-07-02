import Link from "@/components/Link"
import { Badge } from "@/components/ui/badge"

type Category = "会社のブログ" | "個人のブログ" | "Web記事" | "イベント"

const categoryColors: Record<Category, string> = {
  会社のブログ: "bg-slate-500 text-white",
  個人のブログ: "bg-teal-500 text-white",
  Web記事: "bg-purple-500 text-white",
  イベント: "bg-amber-500 text-white",
}

const tagColors = new Map<string, string>([
  ["学会", "bg-rose-200 text-rose-500"],
  ["データサイエンス", "bg-blue-200 text-blue-500"],
  ["統計学", "bg-sky-200 text-sky-500"],
  ["機械学習", "bg-cyan-200 text-cyan-500"],
  ["因果推論", "bg-teal-200 text-teal-500"],
  ["数学", "bg-emerald-200 text-emerald-500"],
  ["アプリ開発", "bg-green-200 text-green-500"],
  ["AWS", "bg-orange-200 text-orange-500"],
])

export interface ArticleLinkProps {
  href: string
  title: string
  category: Category
  date?: string
  tags?: string[]
}

export function ArticleLink({ date, href, title, category, tags }: ArticleLinkProps) {
  return (
    <div className="mb-4 border-gray-200 border-2 rounded-lg p-3">
      <div className="flex gap-2 items-center">
        <p className="text-gray-500">{date}</p>
        <Link href={href}>
          <span className="font-bold">{title}</span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        <Badge className={`text-sm font-medium rounded-sm ${categoryColors[category]}`}>{category}</Badge>

        <div className="flex flex-wrap gap-2">
          {(tags ?? []).map((tag, index) => {
            return (
              <Badge
                key={index}
                variant="default"
                className={`text-sm font-semibold ${tagColors.get(tag) ?? "bg-gray-100"}`}
              >
                {tag}
              </Badge>
            )
          })}
        </div>
      </div>
    </div>
  )
}
