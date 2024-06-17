import { cn } from '@/libs/utils'

export default function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        'p-[10px] border-2 border-black  placeholder:text-gray-500',
        className
      )}
    />
  )
}
