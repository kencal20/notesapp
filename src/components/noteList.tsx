import React from 'react'
import { IState, Note } from '../objects'
import NoteItem from './noteItem'
type Props = {
    notes: IState['note'][]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export default function NoteList({ notes, setNotes }: Props) {

    function handleDelete(id:string) {
        setNotes(notes => notes.filter(note => note.id !== id))
    }
    return (
        <div>
            {
                notes.map(note =>
                    (<NoteItem key={note.id} note={note} handleDelete={handleDelete} />))
            }
        </div>
    )
}