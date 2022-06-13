import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DragAndDropTest.css";

function DragAndDropTest() {
  const [items] = useState(["item0", "item1", "item2"]);
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
              <Draggable draggableId="item0" index={0}>
                {(provided) => (
                  <div
                    className="item"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {items[0]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="item1" index={1}>
                {(provided) => (
                  <div
                    className="item"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {items[1]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="item2" index={2}>
                {(provided) => (
                  <div
                    className="item"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {items[2]}
                  </div>
                )}
              </Draggable>
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
