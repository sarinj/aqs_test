'use client'

import Button from '@/components/button/Button'
import Input from '@/components/input/input'
import TextArea from '@/components/input/textarea'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)

    // const form = event.target
    // form.reset()
  }

  return (
    <div className='flex items-center justify-center w-full py-6'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col space-y-[15px] max-w-[400px] w-full'
      >
        <div className='flex flex-col space-y-[15px]'>
          <label className='font-bold'>Name</label>
          <Input
            required
            id='fullname'
            name='fullname'
            type='text'
            placeholder='Jane Code'
          />
        </div>
        <div className='flex flex-col space-y-[15px]'>
          <label className='font-bold'>Email Address</label>
          <Input
            required
            id='email'
            name='email'
            type='email'
            placeholder='email@website.com'
          />
        </div>
        <div className='flex flex-col space-y-[15px]'>
          <label className='font-bold'>Message</label>
          <TextArea
            required
            id='message'
            name='message'
            placeholder='What would you like to say?'
            rows={10}
          />
        </div>
        {submitted ? (
          <p className='mt-[15px] font-semibold text-center'>
            Your message has been sent, thanks!
          </p>
        ) : (
          <Button className='w-[150px] bg-white' type='submit'>
            Submit
          </Button>
        )}
      </form>
    </div>
  )
}
