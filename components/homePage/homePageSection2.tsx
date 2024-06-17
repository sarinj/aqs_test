import { dmSerif } from '@/app/fonts'
import Button from '../button/Button'
import BenefitCard from './benefitCard'

export default function HomepageSection2() {
  return (
    <section className='py-[50px] space-y-12 text-center'>
      <div className={dmSerif.className}>
        <h2 className='text-[26px] md:text-[36px] font-bold max-w-[650px] m-auto leading-[1.1]'>
          Frontend Practice provides you with the inspiration and resources to
          create beautiful websites.
        </h2>
      </div>
      <p className='text-[26px] m-auto max-w-[450px]'>
        Here are some ways you can benefit from using our platform:
      </p>
      <div className='flex flex-wrap justify-center m-auto max-w-[1000px]'>
        <BenefitCard
          imageURL='https://images.prismic.io/frontendpractice/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.png?auto=compress,format'
          description='Enhance your skills by building real websites selected for their educational value.'
        />
        <BenefitCard
          imageURL='https://images.prismic.io/frontendpractice/65eee214-bbfe-4f9e-ad0f-70f7785679be_layout.png?auto=compress,format'
          description='Test and improve your frontend knowledge through various challenges.'
        />
        <BenefitCard
          imageURL='https://images.prismic.io/frontendpractice/8d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.png?auto=compress,format'
          description='Use the provided color palettes for each project to save time.'
        />
        <BenefitCard
          imageURL='https://images.prismic.io/frontendpractice/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.png?auto=compress,format'
          description='Find helpful, curated resources to tackle challenging elements.'
        />
      </div>
      <div>
        <div className={dmSerif.className}>
          <h2 className='my-[24.9px] text-[30px] font-bold leading-[1.1] m-auto max-w-[400px]'>
            Ready to become a better frontend developer?
          </h2>
        </div>
        <Button>Get Started</Button>
      </div>
    </section>
  )
}
