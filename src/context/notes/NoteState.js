import React, { useState } from 'react';
import NoteContext from "./noteContext";


const NoteState = (props)=> {
    const notesInitial = [
        {
          "_id": "616c2f46584a54fb712d0581",
          "user": "616a9bd8ddede43dccb2cf05",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "Personal",
          "__v": 0
        }, 
        {
            "_id": "616c2f46584a54fb712d0582",
            "user": "616a9bd8ddede43dccb2cf05",
            "title": "dear title of mine",
            "description": "east and west i am the best",
            "tag": "Personal",
            "__v": 0
          },
        {
            "_id": "616c2f46584a54fb712d0583",
            "user": "616a9bd8ddede43dccb2cf05",
            "title": "I am third note",
            "description": "My hobby is to draw and design",
            "tag": "Personal",
            "__v": 0
          },
          {
            "_id": "616c2f46584a54fb712d0582",
            "user": "616a9bd8ddede43dccb2cf05",
            "title": "am the 4th note",
            "description": "Raja ji national park is awesome",
            "tag": "Personal",
            "__v": 0
          },
        {
            "_id": "616c2f46584a54fb712d0583",
            "user": "616a9bd8ddede43dccb2cf05",
            "title": "I am fifth note",
            "description": "I visited jim corbett national park last month",
            "tag": "Personal",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;