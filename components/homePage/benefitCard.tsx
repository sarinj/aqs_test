import Image from 'next/image'

export default function BenefitCard({
  description,
  imageURL,
}: {
  description: string
  imageURL: string
}) {
  return (
    <div className=' flex flex-col md:flex-row items-center max-w-[450px] m-[12px] p-[15px] border-2 border-black'>
      <Image
        className='size-[75px] md:size-[100px] sm:m-[0px_0px_12px_0px] md:m-[0px_30px_0px_0px]'
        src={imageURL}
        width={100}
        height={100}
        alt='icon'
      />
      <p className='max-w-[300px] mx-auto text-[18px] text-center'>
        {description}
      </p>
    </div>
  )
}
