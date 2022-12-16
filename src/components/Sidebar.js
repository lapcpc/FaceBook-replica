import React from 'react'
import { HomeIcon, UsersIcon, BuildingStorefrontIcon, ClockIcon, PlayCircleIcon, FolderPlusIcon, Squares2X2Icon  } from '@heroicons/react/24/solid'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='ml-1 col-span-1 lg:col-span-2 space-y-2 w-3/4 min-w-[45px] text-sm flex flex-col bg-white shadow-md lg:shadow-none lg:bg-transparent '>
            <div className='mt-2'>
                <SidebarRow Icon={HomeIcon} Title="Home" />
            </div>
            <hr className='my-2' />
            <SidebarRow Icon={UsersIcon} Title="Amigos" />
            <SidebarRow Icon={FolderPlusIcon} Title="Mas recientes" />
            <SidebarRow Icon={BuildingStorefrontIcon} Title="Marketplace" />
            <SidebarRow Icon={PlayCircleIcon} Title="Watch" />
            <SidebarRow Icon={ClockIcon} Title="Recuerdos" />
            <SidebarRow Icon={Squares2X2Icon} Title="Ver todo" />
    </div>
  )
}

export default Sidebar