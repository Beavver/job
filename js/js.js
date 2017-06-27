$(document).ready(function(){
$('.add_product').click(function(){
  if($('#spinner').hasClass('spinner')){
   $('#spinner').removeClass('spinner');
  }else{
   $('#spinner').addClass('spinner');
  }
 });



$('.resizeTable').click(function(){
  var btn = $(this),
  oldValue = btn.closest('.number-spinner').find('input').val().trim(),
  newVal = 0;
 
  if (btn.attr('data-dir') == 'up') {
   newVal = parseInt(oldValue) + 1;
  } else {
   if (oldValue > 1) {
    newVal = parseInt(oldValue) - 1;
   } else {
    newVal = 1;
   }
  }
  btn.closest('.number-spinner').find('input').val(newVal);});
});

$(document).on('click', '#buy', function(evt){
	evt.preventDefault();
	toastr.success('Товар добавлен в корзину!');
});
