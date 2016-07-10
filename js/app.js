$(document).ready(function(){
	$('.main').on('click', '.remove-item', function(){
		var removeThis = $(this).closest('.list-item');
		removeThis.remove();
	});
	$('.add-item-button').click(function(){
		var addedItem = $('.item-to-add').val();
		var price = $('.estimated-price').val();
		var listString = '<li><div class="list-item"><p class="checkbox"><input type="checkbox">Got item</p><p class="item-name">' + addedItem +'</p><button class="remove-item">Remove</button><p>$'+price+'</p></div></li>'
		$('ul').append(listString);
	});

	$('.reset-list').click(function(){
		$('li').remove();
	});

	$('.main').on('change', 'input[type=checkbox]', function() {
		if ($(this).prop('checked')==true){
			$(this).parent('.checkbox').siblings('.item-name').css('text-decoration', 'line-through').css('color', 'transparent').css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
						}
		else { 
			$(this).parent('.checkbox').siblings('.item-name').css('text-decoration', 'none').css('color', 'black').css('text-shadow', 'none');
		}
	});

	















});