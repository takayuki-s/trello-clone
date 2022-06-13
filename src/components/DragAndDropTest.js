import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DragAndDropTest.css";

function DragAndDropTest() {
  const [items] = useState([
    { id: 1, text: "item0" },
    { id: 2, text: "item1" },
    { id: 3, text: "item2" },
  ]);
  const onDragEnd = (result) => {
    // 最初の位置
    console.log(result.source.index);
    // 動いた後の位置
    console.log(result.destination.index);
    const remove = items.splice(result.source.index, 1);
    console.log(remove);
    items.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable draggableId={item.text} index={index} key={item.id}>
                  {(provided) => (
                    <div
                      className="item"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {/* // placeholderエラーになるので以下をお作法として書いておく */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DragAndDropTest;
