import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import React from "react"
import { BiDetail } from "react-icons/bi"
import Markdown, { Components } from "react-markdown"

export interface TimelineItem {
  date: string
  title: string
  summary: string
  markdown?: string
  content?: React.ReactNode
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "gray"
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const colorClasses = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  gray: "bg-gray-200",
}

const markdownSettings: Components = {
  h1: ({ node, ...props }) => <h1 className="text-lg font-bold my-2" {...props} />,
  h2: ({ node, ...props }) => <h2 className="font-bold my-2" {...props} />,
  h3: ({ node, ...props }) => <h3 className="font-bold my-2" {...props} />,
  ol: ({ node, ...props }) => <ol className="px-6 list-decimal mb-6" {...props} />,
  ul: ({ node, ...props }) => <ul className="px-6 list-disc mb-6" {...props} />,
  p: ({ node, ...props }) => <p className="mb-6" {...props} />,
  a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" target="_blank" {...props} />,
}

export default function ModalTimeline({ items, className = "" }: TimelineProps) {
  return (
    <ol className={`relative border-s border-gray-300 ${className}`}>
      {items.map((item, index) => {
        const color = item.color || "gray"
        const dotColorClass = colorClasses[color]
        const isLast = index === items.length - 1

        return (
          <li key={index} className={`${isLast ? "ms-4" : "mb-4 ms-4"}`}>
            {/* Timeline dot */}
            <div
              className={`absolute w-3 h-3 ${dotColorClass} rounded-full mt-1.5 -start-1.5 border border-white`}
            ></div>

            {/* Date */}
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.date}</time>

            {/* Title and Detail Button */}
            <Dialog>
              <h3 className="text-md font-semibold text-gray-700 mb-2">{item.title}</h3>

              <div className="text-gray-500">
                <Markdown components={markdownSettings}>{item.summary || ""}</Markdown>
              </div>

              <DialogTrigger className="px-4 py-1 flex items-center gap-1 text-sm rounded-md border border-gray-500 text-gray-500 hover:bg-gray-200 transition-colors hover:cursor-pointer">
                <BiDetail />
                詳細
              </DialogTrigger>

              <DialogContent className="bg-white max-w-4xl max-h-[80vh] flex flex-col">
                <DialogHeader className="flex-shrink-0">
                  <DialogTitle>{item.title}</DialogTitle>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400">{item.date}</time>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="text-md">
                    {/* Markdown Description */}
                    {item.markdown && (
                      <div className="text-gray-600">
                        <Markdown components={markdownSettings}>{item.markdown}</Markdown>

                        {/* Custom content */}
                        {item.content && <div className="text-gray-600">{item.content}</div>}
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </li>
        )
      })}
    </ol>
  )
}
