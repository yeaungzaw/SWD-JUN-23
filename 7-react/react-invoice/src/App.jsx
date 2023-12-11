import React from 'react'
import Header from './Header'
import Buttons from './Buttons'
import CheckoutForm from './CheckoutForm'
import RecordTable from './RecordTable'
import ManageProductBox from './ManageProductBox'

const App = () => {
  const AppTitle = "MMS Solutions";
  const Brand = "Invoice App";
  return (
    <div className='max-w-[400px] sm:max-w-[550px] mx-auto py-3 mb-10'>
      <Header AppTitle={AppTitle} Brand={Brand} />
      <CheckoutForm />
      <RecordTable />
      <Buttons />
      <ManageProductBox />
    </div>
  )
}

export default App