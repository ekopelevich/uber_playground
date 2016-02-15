$(document).ready(function(){
  console.log('sanity check');
  setUberRequestListener();
})

function setUberRequestListener(){
  $('.uber-btn').click(function(){
    console.log('uber button clicked');
    $.get('/uber', function(data){
      console.log(data);
    });
  });
}
