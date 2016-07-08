$(document).ready(function(){

	var addedItem = $('.item-to-add').val();
	var price = $('.estimated-price').val();

	var listString = '<li><div class="list-item"><p class="checkbox"><input type="checkbox">Got item</p><p>' + addedItem +'</p><button class="remove-item">Remove</button><p>$'+price+'</p></div></li>'

	$('.add-item-button').click(function(){
		$('ul').append(listString);
	});

	$('.reset-list').click(function(){
		$('li').remove();

	});
















});