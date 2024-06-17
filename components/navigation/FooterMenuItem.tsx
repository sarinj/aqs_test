import { cn } from '@/libs/utils'
import Link from 'next/link'

export default function FooterMenuItem({
  title,
  href,
  className,
}: {
  title: React.ReactNode
  href: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'font-semibold cursor-pointer hover:underline clickable',
        className
      )}
    >
      {title}
    </Link>
  )
}
