import { ArrowUturnRightIcon, ChatBubbleBottomCenterIcon, FaceSmileIcon, HandThumbUpIcon } from  '@heroicons/react/24/outline'
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Post() {
  return (
    <div className='w-full bg-white my-2 rounded-lg shadow-md'>
        {/* Header Post */}
        <div className='flex flex-row  mx-4 pt-4'>
            <div className='w-fit p-1'>
                <img className='w-10 h-10 rounded-full' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
            </div>
            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-col p-2 '> 
                    <p className='text-sm'>Luis Alejandro Pinot Campos</p>
                    <p className=' text-xs'>2h</p>
                </div>
                <div className='flex flex-row space-x-2'>
                    <EllipsisHorizontalIcon className='w-7 h-7' />
                    <XMarkIcon className='w-7 h-7' />
                </div>

            </div>
        </div>
        {/* Texto e imagen */}
        <div className='flex flex-col'>
            <p className='text-sm mx-4 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet tellus ullamcorper, interdum velit sit amet, rhoncus nisi. Quisque eget hendrerit mauris, in suscipit est. Duis scelerisque mattis tincidunt. Suspendisse a viverra lorem. Donec sit amet facilisis enim, ut dapibus eros. Vestibulum eu interdum erat, eget egestas augue. Praesent id scelerisque neque, ac finibus quam. Pellentesque sit amet imperdiet odio, eget aliquam felis. Suspendisse ac dapibus ante.</p>
            <img className='bg-gray-300 w-full h-[600px] object-contain' src="https://i.pinimg.com/736x/7c/0c/c9/7c0cc97b855fe411e11b30ea9809cba3.jpg" />


        </div>
        {/* Likes y comentario info */}
        <div className='py-1 text-xs flex flex-row justify-between mx-2'>
        <div className='flex flex-row space-x-2 mx-3'>
        <FaceSmileIcon className='w-4 h-4 text-yellow-400' />
        <p>5.1 mil</p>
        </div>
        <p>1 vez compartido</p>

        </div>
        <hr/>
        {/* Me gusta, comentar y compartir */}
        <div className='text-sm text-slate-500 py-2 flex flex-row justify-between'>
            <div className=' w-fit mx-auto flex flex-row'>
                <HandThumbUpIcon className='w-6 h-6' />
                <p>Me gusta</p>

            </div>
            <div className='w-fit mx-auto flex flex-row'>
                <ChatBubbleBottomCenterIcon className='w-6 h-6' />
                <p>Comentar</p>

            </div>
            <div className='w-fit mx-auto flex flex-row'>
                <ArrowUturnRightIcon className='w-6 h-6' />
                <p>Compartir</p>

            </div>

        </div>
        {/* Comentar */}
    </div>
  )
}

export default Post