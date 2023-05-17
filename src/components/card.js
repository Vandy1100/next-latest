import Link from 'next/link'
import React from 'react'

export default function Card({title,description,images,id}) {
  return (
<div className="max-w-sm  float-left w-96 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <img className="rounded-t-lg w-full h-96" src={images} alt="" />
    </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <Link href={`products/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </Link>
    </div>
</div>

  )
}
