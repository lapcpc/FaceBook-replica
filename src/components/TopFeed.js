
import React, { useState } from 'react'
import { ChevronLeftIcon,ChevronRightIcon, PlusIcon, BookOpenIcon, VideoCameraIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import './Slider.css'
function Subtitle({Icon, Title}){
    return (
        <div className='py-2 flex flex-row  '>
            <div className=' space-x-1 w-fit flex flex-row mx-auto '>
            <Icon className="text-blue-500 w-5 h-5 mt-0.5"/>
            <p className=' '>{Title}</p>
            </div>
        </div>
    )
}

function TopFeed() {
    let imgs = [1,2,3,4,5,6,7]
    const [top, setTop] = useState(1)
    
    const slideRight = () =>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
    }
    const slideLeft = () =>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 300;
    }
  return (
    <div className='bg-white rounded-lg shadow-md'>
        <div className='flex flex-row  justify-center '>
            <div className={`${top == 1 ? 'border-b-4 border-b-blue-500' : ''} cursor-pointer w-[30%]`}  
            onClick={()=>setTop(1)}
            >
                <Subtitle Icon={BookOpenIcon} Title="Historias" />
            </div>
            <div className={ `${top == 2 ? 'border-b-4 border-b-blue-500' : ''} cursor-pointer  w-[30%]`}            onClick={()=>setTop(2)}
            >
                <Subtitle Icon={VideoCameraIcon} Title="Reels" />
            </div>
            <div className={`${top == 3 ? 'border-b-4 border-b-blue-500' : ''} cursor-pointer w-[30%]`}
            onClick={()=>setTop(3)}>
                <Subtitle Icon={PlayCircleIcon} Title="Salas" />
            </div>
        </div>
        <div className=' flex flex-row m-2  ' id='slider'>
            {/* Sliders */}
            <div 
            className='cursor-pointer bg-white p-1 rounded-full shadow-md w-fit h-fit absolute top-[25%] '
            onClick={slideLeft}
            >
                <ChevronLeftIcon className='h-6 w-6' />
            </div>
            <div  
            className='cursor-pointer bg-white p-1 rounded-full shadow-md w-fit h-fit absolute top-[25%]  left-[65%] z-50'
            onClick={slideRight}
            >
                <ChevronRightIcon  onClick={slideRight} className='h-6 w-6' />
            </div>
            {/*Crear historia*/}
                <div className=' flex-none bg-white shadow-lg rounded-md w-28 h-48 m-2 '>
                    <img className=' object-cover w-40 h-36 rounded-md' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
                    <div className='  h-full'>
                        <div className='bg-blue-500 p-1 border-4 border-white w-fit h-fit relative rounded-full   z-50 -top-5 left-[35%]'>
                        <PlusIcon className='  text-white  w-5 h-5' />
                        </div>
                    
                        <p className=' relative text-xs text-center -top-3 font-semibold '>Crear historia</p>
                    </div>
                </div>
            {/*Historiias*/}
                <div className=' flex flex-row'>
                    {imgs.map((img)=>(
                        <div className='transition ease-in duration-100 delay-200 hover:scale-110  bg-white shadow-lg rounded-md w-28 h-48 m-2'>
                        <img className='z-10 object-cover w-52 h-48 rounded-md' src="https://i.pinimg.com/736x/7c/0c/c9/7c0cc97b855fe411e11b30ea9809cba3.jpg" />
                        <p className='text-white text-sm ml-2 z-20 -top-6 relative'> Luis Pinot</p>    
                        <img className='relative rounded-full -top-[107%] border-2 border-blue-700 ml-1 z-20 object-cover w-10 h-10 ' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
                    </div>
                    ))}
                </div>
        </div>
        
        
    </div>
  )
}

export default TopFeed