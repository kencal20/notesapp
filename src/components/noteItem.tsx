import React from 'react';
import { IState } from '../objects';
import { Button, Card } from 'react-bootstrap';

type Props = {
  note: IState['note'];
  handleDelete: (_id: string) => void
};

export default function NoteItem({ note, handleDelete }: Props) {
  // Destructure note object to access id
  const {  _id, title, text, color,  } = note;

  return (
    <Card className='mb-3' style={{ backgroundColor: color }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {/* Pass id to handleDelete function */}
        <Button variant='danger' onClick={() => handleDelete(_id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}
