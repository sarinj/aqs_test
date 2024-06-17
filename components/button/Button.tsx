import { cn } from '@/libs/utils'

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        'px-[15px] py-[10px] border-2 border-black font-semibold cursor-pointer hover:bg-black text-black-1 hover:text-white',
        className
      )}
    >
      {children}
    </button>
  )
}
