import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export interface ArticleLinkProps {
  href: string
  title: string
  desc?: string
  type?: string
  date?: string
  tags?: string[]
  className?: string
}

export function ArticleLink({ date, href, title, desc, tags, className }: ArticleLinkProps) {
  const linkClassName = `text-blue-600 hover:underline ${className}`

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            {title}
          </a>
        </CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
      <CardFooter>
        {(tags ?? []).map((tag, index) => {
          return (
            <Badge className="mx-2" key={index}>
              {tag}
            </Badge>
          )
        })}
      </CardFooter>
    </Card>
  )
}
