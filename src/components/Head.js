import React from 'react'
import { BellIcon, ChatBubbleLeftEllipsisIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid' 
function Head() {
  return (
    <div className='grid grid-cols-12 w-full justify-between bg-white shadow-md'>
        <div className='p-2 mt-2 ml-2 col-span-2 '>
            <img className=' h-[21px] ' src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-15.png"/>
        </div>
        <div className='w-3/4 h-3/4 mx-auto col-span-7 flex flex-row my-auto rounded-full px-5  bg-gray-200'>
            <MagnifyingGlassIcon className='w-5 h-5 mt-2'/>
            <input className='bg-gray-200' placeholder='Holi' />
    
        </div>
        <div className=' mr-5 mt-1 space-x-1 col-span-3 flex flex-row justify-end '>
           <div className='p-2 rounded-full bg-gray-200 w-fit h-fit'>
                <ChatBubbleLeftEllipsisIcon className='w-6 h-6'/>
           </div>
           <div className='p-2 rounded-full bg-gray-200 w-fit h-fit'>
                <BellIcon className='w-6 h-6' />
           </div>
            

        </div>
    </div>
  )
}

export default Head