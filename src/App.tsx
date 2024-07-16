import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IState } from './objects'


export default function App() {
  const [notes,setNotes] = useState<IState['note'][]>([{
    id:new Date().toDateString(),
    title: 'notes',
    text: 'notes',
    color: '#F5F5F5',
    date: new Date().toDateString()

  }])
  return (
    <div className='App'>
      App
    </div>
  )
}
