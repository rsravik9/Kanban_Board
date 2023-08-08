import React, { useState } from "react";
import "./Board.css";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import DropDown from "../DropDown/DropDown";

function Board(props) {
  const {
    boardData,
    removeBoards,
    onAddCard,
    removeCards,
    handleDragEnter,
    handleDragEnd,
  } = props;

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {boardData.title} <span>{`${boardData?.cards?.length}`}</span>
        </p>
        <div
          className="board_top_more"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => setShowDropDown(true)}
        >
          <MoreHorizontal />
          {showDropDown && (
            <DropDown onClose={() => setShowDropDown(false)}>
              <div className="board_dropDown">
                {/* p onClick is in built onClick so only have to pass boardData.id */}
                <p onClick={() => removeBoards(boardData.id)}>Delete Board</p>
              </div>
            </DropDown>
          )}
        </div>
      </div>
      {/* onAddCard={(title, boardId) => addCard(title, boardId)} // Add Card
                removeCards={removeCards}  // Remove Card */}
      <div className="board_cards costom-scroll">
        {boardData?.cards?.map((item) => (
          <Card
            key={item.id}
            cardData={item}
            boardId={boardData.id}
            removeCards={removeCards}
            handleDragEnter={handleDragEnter}
            handleDragEnd={handleDragEnd}
          />
        ))}
        <Editable
          displayClass="boards_cards_add"
          text="Add Card"
          placeholder="Entre Card Title"
          onSubmit={(value) => {
            // Here on custom onSubmit I am getting value from Editable submit it won't pass to onAddCard untill it is received from custom onSubmit.
            console.log("Value of card", value);
            onAddCard(value, boardData?.id);
          }}
        />
      </div>
    </div>
  );
}

export default Board;
