import React from 'react'
import {  VideoCameraIcon, PhotoIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
function CreatePost() {
  return (
    <div className='bg-white rounded-lg shadow-md'>
        <div>
            <div className='flex flex-row space-x-2 m-2 p-2'>
            
                <img src='https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg' className='rounded-full w-10 h-10' />
                <input className='w-full rounded-full p-2 placeholder:text-slate-500 bg-gray-100' placeholder='Que estas pensando, Luis Alejandro' />

            </div>
            <hr></hr>
            <div className='flex flex-row justify-between py-3 text-slate-500'>
                <div className='space-x-2 flex flex-row w-fit mx-auto'>
                  <VideoCameraIcon className='text-red-500 h-6 w-6' />
                  <p>Video en vivo</p>
                </div>
                <div className='space-x-2 flex flex-row w-fit mx-auto'>
                  <PhotoIcon className='text-green-500 h-6 w-6' />
                  <p>Foto/video</p>
                </div>
                <div className='space-x-2 flex flex-row w-fit mx-auto'>
                  <FaceSmileIcon className='text-yellow-500 h-6 w-6' />
                  <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost