import React from 'react'

function SidebarRow({Icon, Title}) {
  return (
    <div className='flex flex-row space-x-3 space-y-0.5  ml-2 p-1 cursor-pointer hover:bg-gray-100 lg:hover:bg-gray-200'>
        <Icon className=" w-5 h-5 text-blue-500" />
        <p className='hidden lg:inline'> {Title}</p> 
    </div>
  )
}

export default SidebarRow