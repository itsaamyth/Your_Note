<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="jquery.js"></script>
    <script src="todolist.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" >
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container todohead">
       <h2 align=center >Welcome to Your Note Application</h2>
  </div> 
 <div class="container" >
  <div id="todobox" class="shadow p-3 mb-5 bg-white rounded"> 
   <div class="col-lg-12" > 
    <input type="text" class="todo" id="newtodo">
    <button class="btn btn-outline-dark" id="addtodo">ADD</button>
    <ul id="todolist">
        <li>Task 1</li>
    </ul>  
   </div>  
  </div> 
  </div>  
</body>
</html>
