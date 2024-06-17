import HomepageSection1 from '@/components/homePage/homePageSection1'
import HomepageSection2 from '@/components/homePage/homePageSection2'

export default function Home() {
  return (
    <main className='divide-y-2 divide-black'>
      <HomepageSection1 />
      <HomepageSection2 />
    </main>
  )
}
