import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IState } from './objects';
import { Container, Row, Col } from 'react-bootstrap';
import NoteList from './components/noteList';
import CreateNote from './components/createNote';
import axios from 'axios';


export default function App() {
  const [notes, setNotes] = useState<IState['note'][]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  function fetchNotes() {
    axios.get('http://localhost:5000/notes')
      .then(res => {
        console.log(res.data.notes);
        setNotes(res.data.notes)
      })
  }
  function deleteNote(id: string) {
    axios.delete(`http://localhost:5000/note/${id}`)
      .then(() => {
        setNotes(notes => notes.filter(note => note._id !== id));
      })
      .catch((error) => {
        console.error('There was an error deleting the note!', error);
      });
  }

  return (
    <div>
      <Container className='mt-3'>
        <Row>
          <Col>
            <NoteList notes={notes} handleDelete={deleteNote} />
          </Col>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
