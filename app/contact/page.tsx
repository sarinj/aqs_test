import { cn } from '@/libs/utils'
import { dmSerif } from '../fonts'
import ContactForm from './components/contactForm'

export default function ContactPage() {
  return (
    <div className='flex flex-col items-center justify-center bg-beige py-9 px-3'>
      <div className='w-full max-w-[400px]'>
        <div className={cn(dmSerif.className, 'my-[43px]')}>
          <h1 className='text-[52px] font-bold leading-[1.1]'>Contact us.</h1>
        </div>
        <p className='mb-4'>
          You may find that our{' '}
          <span className='font-bold underline cursor-pointer'>FAQ page</span>{' '}
          has the answers that you are looking for. If not, feel free to reach
          out!
        </p>
      </div>
      <ContactForm />
    </div>
  )
}
