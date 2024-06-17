import FooterMenuItem from './FooterMenuItem'
import { NavMenus } from './NavMenus'

export default function Footer() {
  return (
    <footer className='py-10 px-5 bg-black text-white'>
      <div className='flex flex-col item-start md:items-center justify-between'>
        <p className='mb-4'>Frontend Practice - © 2024</p>
        <div className='flex flex-col sm:flex-row flex-wrap justify-between w-[calc(100%-10px)] max-w-[500px]'>
          {NavMenus?.map(menu => (
            <FooterMenuItem
              key={menu.title + menu.href}
              title={menu.title}
              href={menu.href}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
