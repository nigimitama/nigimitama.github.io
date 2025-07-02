import Link from "@/components/Link"
import { Button } from "@/components/ui/button"
import { AiOutlineExport } from "react-icons/ai"

export const ExternalLinkButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Button size="sm" variant="outline" className="border-gray-500 text-gray-500 hover:bg-gray-100" asChild>
      <Link href={href} className="flex items-center gap-2">
        <AiOutlineExport />
        {text}
      </Link>
    </Button>
  )
}
