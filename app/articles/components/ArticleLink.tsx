import Link from "@/components/Link"
import { Badge } from "@/components/ui/badge"

type Category = "会社のブログ" | "個人のブログ" | "Web記事" | "イベント"

const categoryColors: Record<Category, string> = {
  会社のブログ: "bg-gray-500 text-gray-100",
  個人のブログ: "bg-green-500 text-white",
  Web記事: "bg-blue-500 text-white",
  イベント: "bg-yellow-500 text-white",
}

type Tag = "学会" | "データサイエンス" | "アプリ開発"

const tagColors: Record<Tag, string> = {
  学会: "bg-purple-500 text-white",
  データサイエンス: "bg-teal-500 text-white",
  アプリ開発: "bg-orange-500 text-white",
}

export interface ArticleLinkProps {
  href: string
  title: string
  category: Category
  date?: string
  tags?: Tag[]
}

export function ArticleLink({ date, href, title, category, tags }: ArticleLinkProps) {
  return (
    <div className="mb-4 border-gray-200 border-2 rounded-lg p-3">
      <div className="flex gap-2 items-center">
        <p className="text-gray-500">{date}</p>
        <Link href={href}>
          <span>{title}</span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        <Badge className={`text-sm rounded-sm ${categoryColors[category]}`}>{category}</Badge>

        <div className="flex flex-wrap gap-2">
          {(tags ?? []).map((tag, index) => {
            return (
              <Badge key={index} variant="default" className={`text-sm ${tagColors[tag]}`}>
                {tag}
              </Badge>
            )
          })}
        </div>
      </div>
    </div>
  )
}
