import Button from '../button/Button'

export default function HomepageSection2() {
  return (
    <section className='py-[50px] space-y-12 text-center'>
      <h2 className='text-[36px] font-bold max-w-[650px] m-auto'>
        Frontend Practice provides you with the inspiration and resources to
        create beautiful websites.
      </h2>
      <p className='text-[26px] m-auto max-w-[450px]'>
        Here are some ways you can benefit from using our platform:
      </p>
      <div>
        <h2 className='my-[24.9px] text-[30px] font-bold m-auto max-w-[400px]'>
          Ready to become a better frontend developer?
        </h2>
        <Button>Get Started</Button>
      </div>
    </section>
  )
}
