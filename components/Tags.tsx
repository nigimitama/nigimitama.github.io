import { Badge } from "@/components/ui/badge"

interface TagsProps {
  tags: string[]
  className?: string
}

export default function Tags({ tags, className = "" }: TagsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <Badge key={index} variant="default" className="text-sm bg-gray-100">
          #{tag}
        </Badge>
      ))}
    </div>
  )
}

export { Tags }
