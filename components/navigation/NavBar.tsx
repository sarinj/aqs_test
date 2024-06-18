'use client'

import Image from 'next/image'
import NavBarMenuItem from './NavBarMenuItem'
import { NavMenus } from './NavMenus'
import { dmSerif } from '@/app/fonts'
import Link from 'next/link'
import SideBar from './SideBar'
import { useState } from 'react'

export default function NavBar() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  function handleToggle() {
    setIsOpenSideBar(!isOpenSideBar)
  }

  return (
    <nav className='sticky flex z-[1] bg-white top-0 w-full px-4 text-black-1 border-black border-b-[2px] items-center'>
      <div className='flex py-2 mx-auto max-w-[1200px] items-center justify-between w-full'>
        <div className={dmSerif.className}>
          <Link
            href='/'
            className='text-[25px] md:text-[30px] cursor-pointer hover:underline font-semibold clickable'
          >
            Frontend Practice
          </Link>
        </div>
        <div className='hidden md:flex'>
          {NavMenus?.map(menu => (
            <NavBarMenuItem
              key={menu.title + menu.href}
              title={menu.title}
              href={menu.href}
            />
          ))}
        </div>
        <div className='block md:hidden '>
          <button className='z-10 clickable p-1' onClick={() => handleToggle()}>
            {isOpenSideBar ? (
              <Image
                src='https://www.frontendpractice.com/icons/close-50.png'
                width={30}
                height={30}
                alt='icon'
              />
            ) : (
              <Image
                src='https://www.frontendpractice.com/icons/hamburger-menu-50.png'
                width={30}
                height={30}
                alt='icon'
              />
            )}
          </button>
          {isOpenSideBar && <SideBar />}
        </div>
      </div>
    </nav>
  )
}
