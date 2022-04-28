// selecting element by id, width and height
var input_height = document.querySelector('#inputHeight');
var input_width = document.querySelector('#inputWidth');




// addlistener to prevent default events not to occure to the form submit and call Makegred fuc
document.querySelector('#sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
  });


function makeGrid() {
    // query to select table and appre rows and column(cells)
    const pixel_canvas = document.querySelector('#pixelCanvas');

    pixel_canvas.innerHTML = '';
    let h=input_height.value;
    let w=input_width.value;
var color=document.querySelector('#colorPicker')
// create listener to change the background color
var changeColor=function (column) {
    column.addEventListener('click', function () {
        column.style.backgroundColor = color.value;
    });
}
// loop over to append row to the table
    for (let i = 0; i < h; i++) {
      let row = pixel_canvas.insertRow(i);
//   loop to append cells to the rows.
      for (var k = 0; k < w; k++) {
        var column = row.insertCell(k);
        // listener to the cells and chnage the color
        column.addEventListener('click', changeColor(column));

      }
    }
  }
  
  