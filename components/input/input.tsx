import { cn } from '@/libs/utils'

export default function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'p-[10px] border-2 border-black placeholder:text-gray-500',
        className
      )}
    />
  )
}
