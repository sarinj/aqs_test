import NavBarMenuItem from './NavBarMenuItem'
import { NavMenus } from './NavMenus'

export default function SideBar() {
  return (
    <div
      className='list-none fixed top-0 bg-white right-[-2px] bottom-0 h-full w-full overflow-hidden 
    max-w-[300px] z-[-1] border-l-2 border-black m-0 transition-width duration-300 ease-in-out delay-0'
    >
      <div className='flex flex-col p-[25px] space-y-[15px]'>
        {NavMenus?.map(menu => (
          <NavBarMenuItem
            className='text-[24px]'
            key={menu.title + menu.href}
            title={menu.title}
            href={menu.href}
          />
        ))}
      </div>
    </div>
  )
}
