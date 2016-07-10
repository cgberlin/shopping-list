$(document).ready(function(){

	var totalPrice = 0

	$('.main').on('click', '.remove-item', function(){
		var removeThis = $(this).closest('.list-item');
		$(removeThis).fadeOut(1500);
		$(removeThis).delay(1500).remove();
	});
	$('.add-item-button').click(function(){
		var addedItem = $('.item-to-add').val();
		var price = parseInt($('.estimated-price').val(),10);
		totalPrice += price;
		var listString = '<li><div class="list-item"><p class="checkbox"><input type="checkbox">Got item</p><p class="item-name">' + addedItem +'</p><button class="remove-item">Remove</button><p class="the-price">$'+price+'</p></div></li>'
		$('ul').append(listString);
		$('.list-item:last').hide().fadeIn(1500);
		$('.price-total > p').replaceWith('<p>Total Price: $'+totalPrice+'</p>');
			});

	$('.reset-list').click(function(){
		$('li').fadeOut(1000, function(){
			$(this).remove();
			totalPrice = 0
			$('.price-total > p').replaceWith('<p>Total Price: $'+totalPrice+'</p>');
		});
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