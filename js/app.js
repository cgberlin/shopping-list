$(document).ready(function(){

	var addItemValue = $('.item-to-add').val();
	var price = $('.estimated-price').val();


	$('.add-item-button').click(function(){
		alert(addItemValue + price);
	});

	$('.reset-list').click(function(){
		$('li').remove();

	});















});