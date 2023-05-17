import Image from 'next/image'
import { Suspense } from 'react'
import Product from './products/page'
import Loading from './loading'
export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading/>}>
      <Product/>
      </Suspense>
    </main>
  )
}
