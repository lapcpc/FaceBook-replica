import { EllipsisHorizontalCircleIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import {VideoCameraIcon} from '@heroicons/react/24/solid'

import React from 'react'

function Widgets() {
    const contactos = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className=' relative md:-left-28 lg:-left-0 hidden md:inline md:col-span-2 md:w-[160%] lg:w-5/6 lg:col-span-3 col-span-3 w-5/6'>
        {/* Publicidad */}
        <div>
            <p className=' my-3 text-md font-semibold'>Publicidad</p> 
            <div className='space-y-2'>
                <div className='flex flex-row space-x-2'>
                <img className='rounded-md w-28 h-28' src='https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-xs font-semibold'>Elite Software Engineer Wanted</p>   
                    <p className='text-xs'>magia.developer.com</p>   
                    </div>
                </div>
                <div className='flex flex-row space-x-2'>
                <img className='rounded-md w-28 h-28' src='https://blog.unitips.mx/hs-fs/hubfs/Contenido_Informativo_Blog/Universidades%20-%20UNI/UNI-Carreras/08.21_Carreras%20del%20Tec%20de%20Monterrey/TEC_IN.png?width=1200&name=TEC_IN.png' />
                    <div className='flex flex-col justify-center'>
                    <p className='text-xs font-semibold'>Elite Software Engineer Wanted</p>   
                    <p className='text-xs'>magia.developer.com</p>   
                    </div>
                </div>
            </div>
        </div>
       
        {/* Cumpleaños */}
        <br />
        <div className='flex flex-col w-full '>
        <p className=' my-3 text-md font-semibold'>Cumpleaños</p> 
            <div className='flex flex-row space-x-4 w-full'>
                <img className='w-10 h-10 ' src="https://cdn-icons-png.flaticon.com/512/4067/4067192.png" />
                <p className='text-sm'>
                    Hoy es el cumpleaños de <b>Luis Pinot</b>
                </p>
            </div>

            
        </div>
        {/* Contactos */}
        <br />
        <div className='flex flex-col '>
            <div className='flex flex-row justify-between'>
                <b className='font-semibold'>Contactos </b>
                <div className='flex flex-row text-slate-500 mt-1.5 space-x-4'>
                    <VideoCameraIcon className='w-4 h-4' />
                    <MagnifyingGlassCircleIcon className='w-4 h-4' />
                    <EllipsisHorizontalCircleIcon className='w-4 h-4' />
                    
                </div>

            </div>
            
            <div className='w-full flex flex-col mt-3 space-y-2'>
                {contactos.map(()=>(
                    <div className='space-x-2  flex flex-row w-full hover:bg-gray-200 py-2 px-2 rounded-sm cursor-pointer'>
                        <img src='https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg' className='rounded-full w-7 h-7' />
                        <p className='font-semibold text-sm mt-1'>Luis Alejandro Pinot</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Widgets