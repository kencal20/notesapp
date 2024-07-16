import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { IState, Note } from '../objects'

type Props = {
    notes: IState['note'][]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export default function CreateNote({ notes, setNotes }: Props) {
    const [input, setInput] = useState<Note>({
        id: new Date().toString(),
        title: '',
        text: '',
        color: '#F5F5F5',
        date: new Date().toString(),
    })

    const [status, setStatus] = useState<{ text: string, variant: string }>({
        text: '',
        variant: ''
    })
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!input.title || !input.text || !input.color) {
            setStatus({ text: 'All fields are required', variant: 'danger' })
            return
        }
        
            setStatus({ text: 'Note Creation Successful', variant: 'success' })
            setNotes([...notes, input])
            setInput({ id: '', title: '', text: '', color: '#F5F5F5', date: '' })
        
    }

    return (
        <div>
            <h2>Create Note</h2>
            {status.text && <Alert variant={status.variant} onClose={()=> setStatus({text:'',variant:""})} dismissible>{status.text}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name='title'
                        placeholder="Enter title"
                        onChange={handleInputChange}
                        value={input.title}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name='text'
                        placeholder="Enter text"
                        onChange={handleInputChange}
                        value={input.text}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicColor">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        type="color"
                        name='color'
                        onChange={handleInputChange}
                        value={input.color} />
                </Form.Group>
                <Button className='mt-3' type="submit">Create</Button>
            </Form>
        </div>
    )
}