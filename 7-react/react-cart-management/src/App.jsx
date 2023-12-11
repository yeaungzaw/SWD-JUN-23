import React from 'react'
import Header from './Header'
import HeaderSpacer from './HeaderSpacer'
import CategoryLists from './CategoryLists'
import ProductCards from './ProductCards'
import Footer from './Footer'
import CartBox from './CartBox'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <HeaderSpacer />
        <CategoryLists />
        <ProductCards />
        <CartBox />
        <Footer />
    </div>
  )
}

export default App