// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import GroceryList from './components/GroceryList'
import Header from './components/Header'
// import './index.css'

export default function App() {
  return (
    <>
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
    <Header/>
    <Form/>
    <GroceryList/>
    

    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
    <Footer/>
    </div>
  
</>
  )
}


