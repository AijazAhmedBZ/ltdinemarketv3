import React from 'react'
import brushedRaglanSweatshirt from "public/1-brushed-raglan-sweatshirt.png"
import Image from 'next/image'
const ProductList = () => {
  return (
    <div>
        <Image src={brushedRaglanSweatshirt} alt="1"/>
        <h3 className="font-bold text-lg" >Brushed Raglan Sweatshirt</h3>
        <h3 className="font-bold text-lg mt-3 text-gray-400 " >Long Dress</h3>
        <h3 className="font-bold text-lg" >$195</h3>
    </div>
  )
}

export default ProductList