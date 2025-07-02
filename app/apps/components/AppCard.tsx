import Link from "@/components/Link"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaChrome, FaGithub, FaHome } from "react-icons/fa"
import clsx from "clsx"

export type AppInfo = {
  name: string
  desc: string
  repoUrl: string
  siteUrl?: string
  imageUrl?: string
}

const colorClasses = {
  amber: "border-amber-500 text-amber-500 hover:bg-amber-100",
  lime: "border-lime-500 text-lime-500 hover:bg-lime-100",
}

export const AppCard = ({ app }: { app: AppInfo }) => {
  const isChrome = app?.siteUrl && app?.siteUrl.includes("chrome")
  const siteBtn = {
    color: isChrome ? "amber" : "lime",
    btnClass: isChrome ? colorClasses.amber : colorClasses.lime,
    icon: isChrome ? <FaChrome /> : <FaHome />,
    text: isChrome ? "WebStore" : "Website",
  }

  return (
    <Card>
      <CardTitle className="text-lg">{app.name}</CardTitle>
      <CardContent>
        <p className="text-sm mb-4">{app.desc}</p>
        {app.imageUrl && (
          <div>
            <img src={app.imageUrl} />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-wrap gap-2">
        {app.siteUrl && (
          <Button size="sm" variant="outline" className={clsx(colorClasses[siteBtn.color])} asChild>
            <Link href={app.siteUrl} className="flex items-center gap-2">
              {siteBtn.icon}
              {siteBtn.text}
            </Link>
          </Button>
        )}
        <Button size="sm" variant="outline" className="border-gray-500 text-gray-500 hover:bg-gray-100" asChild>
          <Link href={app.repoUrl} className="flex items-center gap-2">
            <FaGithub />
            Repository
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
