import React from 'react'
import Header from './Header'
import Form from './Form'
import Table from './Table'
import Buttons from './Buttons'

const App = () => {
  return (
    <div className='max-w-[400px] sm:max-w-[550px] mx-auto py-3 mb-10'>
      <Header />
      <Form />
      <Table />
      <Buttons />
    </div>
  )
}

export default App