import React from 'react'

function Product({Name,Description}) {
  return (
    <div className='w-3/4 flex justify-center'>
        <div className='flex flex-col justify-center items-center text-center '>
            <h1 className='text-xl font-body font-semibold text-hardbluegray w-80'>{Name}</h1>
            <p className='w-80'>{Description}</p>
        </div>
    </div>
  )
}

export default Product