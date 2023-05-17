import React from 'react'
import Card from '@/components/card'
async function fetchProducts(id){
    const res=await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,{cache:'no-store'})
    const data=res.json()
    return data
}
export async function generateMetadata({params}){
  const product=await fetchProducts(params.id)
  return{
    title:product.title,
    description:product.description,
    thumbnail:product.images[0],
    metadataBase: new URL('https://findtopia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title:product.title,
    description:product.description,
    thumbnail:product.images[0]
  },
  }
}

export default  async function  page({params}) {
    const {id}=params
    const product= await fetchProducts(id)
  return (
    <div className='flex justify-center'>
    <Card key={product.id}  images={product.images[0]} description={product.description} title={product.title}/>
    </div>
  )
}

