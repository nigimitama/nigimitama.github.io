import React from "react"
import Markdown from "react-markdown"

export interface TimelineItem {
  date: string
  title: string
  description?: string
  markdown?: string
  content?: React.ReactNode
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "gray"
  link?: {
    href: string
    text: string
  }
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

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <ol className={`relative border-s border-gray-200 ${className}`}>
      {items.map((item, index) => {
        const color = item.color || "gray"
        const dotColorClass = colorClasses[color]
        const isLast = index === items.length - 1

        return (
          <li key={index} className={`${isLast ? "ms-4" : "mb-10 ms-4"}`}>
            {/* Timeline dot */}
            <div
              className={`absolute w-3 h-3 ${dotColorClass} rounded-full mt-1.5 -start-1.5 border border-white`}
            ></div>

            {/* Date */}
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{item.date}</time>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>

            {/* Description */}
            {item.description && (
              <p className={`text-base font-normal text-gray-500 ${item.link ? "mb-4" : ""}`}>{item.description}</p>
            )}

            {/* Markdown Description */}
            {item.markdown && (
              <div className="text-gray-700">
                <Markdown
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-lg font-bold my-2" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="font-bold my-2" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="font-bold my-2" {...props} />,
                    ol: ({ node, ...props }) => <ol className="px-6 list-decimal" {...props} />,
                    ul: ({ node, ...props }) => <ul className="px-6 list-disc" {...props} />,
                    p: ({ node, ...props }) => <p className="mb-6" {...props} />,
                    a: ({ node, ...props }) => (
                      <a className="text-blue-500 hover:underline" target="_blank" {...props} />
                    ),
                  }}
                >
                  {item.markdown}
                </Markdown>
              </div>
            )}

            {/* Custom content */}
            {item.content && <div className={`text-gray-700 ${item.link ? "mb-4" : ""}`}>{item.content}</div>}

            {/* Link */}
            {item.link && (
              <a
                href={item.link.href}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                {item.link.text}
                <svg
                  className="w-3 h-3 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export { Timeline }
