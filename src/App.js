import React, { useState } from 'react'
import './App.css';
import Board from './components/Board/Board';
import Editable from './components/Editable/Editable';
import { mapData } from './components/Board/constant'

function App() {
  const [getData, setData] = useState(mapData);
  const [getTarget, setTarget] = useState({ boardId: '', cardId: '' })

  // Adding Cards
  const addCard = (title, boardId) => {
    const card = {
      id: Date.now() + Math.random(),
      title: title,
      tasks: [],
      labels: [],
      description: '',
      date: ''
    }

    // Finding Board Index
    const index = getData.findIndex((ev) => ev.id === boardId)
    console.log('app index', index)
    if (index < 0) return;
    // Function yhin se return ho jayega

    const tempBoards = [...getData]
    tempBoards[index].cards.push(card)
    setData(tempBoards);
  }

  // Removing Cards
  const removeCards = (cardId, boardId) => {
    // Finding Board Index
    const Boardindex = getData.findIndex((ev) => ev.id === boardId)
    if (Boardindex < 0) return;
    // Function yhin se return ho jayega

    const cardIndex = getData[Boardindex].cards.findIndex((evv) => evv.id === cardId)
    if (cardIndex < 0) return;

    const tempBoards = [...getData]
    tempBoards[Boardindex].cards.splice(cardIndex, 1)
    setData(tempBoards);
  }

  // Add Boards
  const addBoard = (title) => {
    setData([
      ...getData,
      {
        id: Date.now() + Math.random() * 0.5,  // Date.now() ==> Give milisecond
        title: title,
        cards: []
      }
    ])
  }

  // Remove Boards
  const removeBoards = (boardId) => {
    const tempBoards = getData.filter((ra) => ra.id !== boardId)
    setData(tempBoards)
  }

  // Draggable Area:

  const handleDragEnd = (boardId, cardId) => {
    console.log(boardId, cardId)
    let source_boardIndex, source_CardIndex, target_boardIndex, target_cardIndex;

    source_boardIndex = getData.findIndex((ra) => ra.id === boardId)
    if (source_boardIndex < 0) return;

    source_CardIndex = getData[source_boardIndex]?.cards?.findIndex((evv) => evv.id === cardId)
    if (source_CardIndex < 0) return;

    target_boardIndex = getData.findIndex((ra) => ra.id === getTarget.boardId)
    if (target_boardIndex < 0) return;

    source_CardIndex = getData[target_boardIndex]?.cards?.findIndex((evv) => evv.id === getTarget.cardId)
    if (target_cardIndex < 0) return;

    // step 01 creating draft copy
    const tempBoards = [...getData]
    //step 02 Keeping copy of the card which moving from any board
    const tempCards = tempBoards[source_boardIndex].cards[source_CardIndex]

    //step 03 usi board se card ko delete kr diya
    tempBoards[source_boardIndex].cards.splice(source_CardIndex, 1)

    // Step 04 target board me us card to add krna   
    tempBoards[target_boardIndex].cards.splice(target_cardIndex, 0, tempCards)

    setData(tempBoards);
    setTarget({ boardId: '', cardId: '' })
  }

  const handleDragEnter = (boardId, cardId) => {
    if (getTarget.cardId === cardId) return;
    setTarget({ boardId: boardId, cardId: cardId })
  }

  return (
    <div className="app">
      <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>

      <div className='app_outer'>
        <div className='app_boards'>
          {
            getData.map((item) => (
              <Board
                key={item.id}
                boardData={item}
                removeBoards={removeBoards} // Removing Board
                onAddCard={(title, boardId) => addCard(title, boardId)} // Add Card
                removeCards={removeCards}  // Remove Card
                handleDragEnter={handleDragEnter}
                handleDragEnd={handleDragEnd}
              />
            ))
          }
          {/* To Add More Columns */}
          <div className='add_boards_board'>
            <Editable
              displayClass='app_boards_board_add'
              text='Add Board'
              placeholder='Enter Boards'
              onSubmit={(title) => addBoard(title)}  // Board Addition
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


