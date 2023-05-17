import Link from 'next/link'
import React from 'react'
import Card from '@/components/card'
async function fetchProducts(){
    const res=await fetch("https://api.escuelajs.co/api/v1/products",{cache:'no-store'})
    const data=res.json()
  
    return data
}
export default async function Product() {
    const results =await fetchProducts()
    console.log(results)
  return (

    <div className='flex justify-center  min-h-screen flex-wrap p-24 font-bold'>{results.map(el=>(

        <Card key={el.id} id={el.id} title={el.title} description={el.description} images={el.images[0]}/> 
    ))}</div>
  )
}


