import React from 'react'
import './Dashboard.styles.scss'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ToDo from '../../components/ToDo/ToDo.component'
import SearchBar from '../../components/SearchBar/SearchBar.component'

const Dashboard = () => {
  return (
    <>
    <DndProvider backend={HTML5Backend}>
    <div className='row'>
        <div className='col'>
            <h1>BackLog</h1>
            <ToDo/>
        </div>
        <div className='col'>
            <h1>ToDo</h1>
        </div>
        <div className='col'>
            <h1>In Progress</h1>
        </div>
        <div className='col'>
            <h1>Done</h1>
        </div>
    </div>
    </DndProvider>
    </>
  )
}

export default Dashboard