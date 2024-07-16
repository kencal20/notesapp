import React from 'react'
import { IState } from '../objects'
import { Button, Card } from 'react-bootstrap'

type Props = {
  note: IState['note']
  handleDelete: (id: string) => void
}

export default function NoteItem({ note,handleDelete }: Props) {
  return (
    <Card style={{ backgroundColor: note.color }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
        <Button variant='danger' onClick={()=> handleDelete(note.id)}>Delete</Button>
      </Card.Body>
    </Card>
  )
}