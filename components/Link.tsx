export default function Link({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const isExternal = href.startsWith("http")
  const linkClassName = className ?? "text-blue-600 hover:underline"

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} className={linkClassName}>
      {children}
    </a>
  )
}
