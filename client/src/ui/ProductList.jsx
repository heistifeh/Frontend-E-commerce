import React from 'react'
import Container from './Container'
import Title from './Title'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const ProductList = () => {
  return (
    <Container>
        <div>
            <div className='flex items-center justify-between'>
                <Title text='Top Selling Products'></Title>
                <Link to = {'/product'}>
                view all Products
                </Link>
            </div>
            {/* simple border */}
            <div className='w-full h-[1px] bg-gray-200 mt-2'></div>

            {/* Pagination */}
            <Pagination />


        </div>
    </Container>
  )
}

export default ProductList