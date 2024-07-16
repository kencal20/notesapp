import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IState } from './objects'
import { Container, Row, Col } from 'react-bootstrap'
import NoteList from './components/noteList'
import CreateNote from './components/createNote'


export default function App() {
  const [notes, setNotes] = useState<IState['note'][]>([{
    id: new Date().toDateString(),
    title: 'notes',
    text: 'notes',
    color: '#F5F5F5',
    date: new Date().toDateString()

  }])
  return (
    <div >
      <Container className='mt-3'>
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
