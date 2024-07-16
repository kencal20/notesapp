import React from 'react'
import { IState, Note } from '../objects'
import NoteItem from './noteItem'
type Props = {
    notes: IState['note'][]
}

export default function NoteList({ notes }: Props) {
    return (
        <div>
            {
                notes.map(note =>
                    (<NoteItem  key={note.id} note={note}/> ))
            }
        </div>
    )
}