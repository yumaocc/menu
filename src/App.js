import React from 'react'
import Home from './page/Home'
import Content from './component/Content'
import { Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/content' element={<Content />}></Route>
      </Route>
    </Routes>
  )
}
