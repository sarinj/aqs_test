import { cn } from '@/libs/utils'
import Link from 'next/link'

export default function NavBarMenuItem({
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
        'mx-[15px] text-[18px] font-semibold cursor-pointer hover:underline',
        className
      )}
    >
      {title}
    </Link>
  )
}
