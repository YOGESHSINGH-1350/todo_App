

function Rows() {
  return (
    <div class="container text-center">
    
    <div class="row">
      <div class="col-4"id="addtodo"><input type="text" placeholder="Enter New Todo"></input></div>
      <div class="col-4"id="addtodo"><input type="date"></input></div>
      <div class="col-2"><button type="button" class="btn btn-success" > ADD </button></div>
      <div class="col-4"id='items'>MILK</div>
    <div class="col-4"><input type="date"></input></div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
    <div class="col-4"id='items'>MILK</div>
    <div class="col-4"><input type="date"></input></div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
    <div class="col-4"id='items'>MILK</div>
    <div class="col-4"><input type="date"></input></div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
    </div>
    
  </div>
  )
}

export default Rows

