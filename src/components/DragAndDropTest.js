import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DragAndDropTest.css";

function DragAndDropTest() {
  return (
    <div className="dragDropArea">
      <DragDropContext>
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
                    item0
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DragAndDropTest;
