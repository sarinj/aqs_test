import Image from 'next/image'
import Button from '../button/Button'

export default function HomepageSection1() {
  return (
    <section className='flex flex-wrap justify-center py-[100px] px-[15px] bg-beige'>
      <div className='flex items-center justify-between w-full max-w-[1200px]'>
        <div className='space-y-5'>
          <h2 className='text-[55px]'>Become a better frontend developer.</h2>
          <p className='text-[23px] max-w-[500px]'>
            Take your frontend skills to the next level by recreating{' '}
            <span className='font-bold'>real websites</span> from{' '}
            <span className='font-bold'> real companies.</span>
          </p>
          <p className='text-[23px] max-w-[500px]'>
            The perfect type of practice for developers of all skill levels. Are
            you up for the challenge?
          </p>
          <div className='flex space-x-[15px]'>
            <Button className='bg-white'>View Projects</Button>
            <Button>Learn More</Button>
          </div>
        </div>
        <div>
          <Image
            alt='image'
            src='https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=1200&q=100'
            width={600}
            height={480}
          />
        </div>
      </div>
    </section>
  )
}
