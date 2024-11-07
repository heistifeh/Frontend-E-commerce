import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Container from './ui/Container'
import BannerCategories from './ui/BannerCategories'
import HomeBanner from './ui/HomeBanner'
import Highlights from './ui/Highlights'
import Categories from './ui/Categories'
import ProductList from './ui/ProductList'
import DiscountedBanner from './ui/DiscountedBanner'
import Blog from './ui/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <BannerCategories />
        <HomeBanner />
        <Highlights />
        <Categories />

        {/* Product List */}
        <ProductList />
        {/* Dsicounted Banner */}
        <DiscountedBanner />
        <Blog />
    </main>
  )
}

export default App
