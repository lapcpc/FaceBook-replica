import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import TopFeed from './TopFeed'

function Feed() {
  return (
    <div className='col-span-10 sm:w-11/12  w-11/12 relative md:-left-14 lg:-left-0 lg:static md:col-span-9 lg:col-span-7 md:w-3/4 lg:w-3/4 mx-auto mt-2 bg-gray-100'>
        <TopFeed />
        <CreatePost />
        <Post />
    </div>
  )
}
export default Feed