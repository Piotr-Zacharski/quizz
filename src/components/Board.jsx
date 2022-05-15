import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import MyButton from './MyButton'
import { v4 as uuidv4 } from 'uuid';


const Fields = [
  { id: uuidv4(), number: 1, title: '...........................................................' },
  { id: uuidv4(), number: 2, title: '...........................................................' },
  { id: uuidv4(), number: 3, title: '...........................................................' },
  { id: uuidv4(), number: 4, title: '...........................................................' },
  { id: uuidv4(), number: 5, title: '...........................................................' },
  { id: uuidv4(), number: 6, title: '...........................................................' },
  { id: uuidv4(), number: 7, title: '...........................................................' },
  { id: uuidv4(), number: 8, title: '...........................................................' },
  { id: uuidv4(), number: 9, title: '...........................................................' },
]

const Board = () => {
  return (
    <><Link className="link" to="/">
    <MyButton title="Home" />
  </Link>
    <div className="board">
      {/* <div className="board-header">
        <h1 className='board-title'>FAMILIADA</h1>
      </div> */}
      <div className="board-content">
        {Fields.map(field => (
          <div className="field" key={field.id}>
            <div className="field-title">{field.number} {field.title}</div>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Board