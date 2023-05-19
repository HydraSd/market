import SellProductForm from '@/Components/SellProductForm';
import React from 'react'
import Link from 'next/link';

const  TimeCount = () => {
    setTimeout(() => {}, 6000)
}

async function Search
() {
  const data = await TimeCount();
  return (
    
      <main className='mt-5 m-2 md:mx-[100px] lg:mx-[200px]'>
      <Link href="/login" className='cursor-pointer'>You have to login first click here to loged in or sign up</Link>
      <h1 className='text-2xl font-semibold ml-2'>Enter your product details</h1>
      <SellProductForm />
      </main>
    
  )
}

export default Search
