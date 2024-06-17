import NavBarMenuItem from './NavBarMenuItem'
import { NavMenus } from './NavMenus'

export default function NavBar() {
  return (
    <nav className='fixed z-10 bg-white top-0 w-full px-9 h-[62.2px] border-black border-b-[2px]'>
      <div className='flex py-2 items-center justify-between w-full'>
        <div>
          <h1 className='text-[30px]'>Frontend Practice</h1>
        </div>
        <div className='flex'>
          {NavMenus?.map(menu => (
            <NavBarMenuItem
              key={menu.title + menu.href}
              title={menu.title}
              href={menu.href}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}
