import React from 'react'
import { IState, Note } from '../objects'
import NoteItem from './noteItem'

type Props = {
    notes: IState['note'][]
    handleDelete: (_id: string) => void
}

export default function NoteList({ notes,handleDelete }: Props) {


    return (
        <div>
            <h2>Note List</h2>
            {
                notes.map(note =>
                    (<NoteItem  key={note._id} note={note} handleDelete={handleDelete} />))
            }
        </div>
    )
}