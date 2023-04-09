const draggable = document.getElementById('drag')

// initialize dragging status and position values
let isDragging = false;
let endX, endY, startX, startY, xOffset = 0, yOffset = 0;

draggable.addEventListener("mousedown", dragStart);
draggable.addEventListener("mouseup", dragEnd);
draggable.addEventListener("mousemove", drag);

// drag starts when mouse is clicked down
function dragStart(e) {
    startX = e.clientX - xOffset;
    startY = e.clientY - yOffset;

    if (e.target === draggable) {
        isDragging = true;
    }
}

// dtag ends when mouse click is released
function dragEnd(e) {
    startX = endX;
    startY = endY;

    isDragging = false;
}

// during drag
function drag(e) {
    if (isDragging) {
        endX = e.clientX - startX;
        endY = e.clientY - startY;

        xOffset = endX;
        yOffset = endY;

        setTranslate(endX, endY, draggable);
    }
}

// calculate the change in position and move the div
function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
