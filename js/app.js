$(document).ready(function(){
		if (localStorage.getItem("itemsSaved") !== null) {
			var loadedItems = JSON.parse(localStorage.getItem("itemsSaved"));
			$.each(loadedItems, function(index, value)  {
    		var listString = value;
    		addString(listString);
	});
	}
	function replaceTotal() {
		$('.price-total > p').replaceWith('<p>Total Price: $'+totalPrice+'</p>');
	}
	function removeThis() {
		$(this).remove();
	}
	function addString(listString) {
		$('ul').append(listString);
		$('.list-item:last').hide().fadeIn(1500);
		replaceTotal();
	}
	function storeTheItems(listString){
		itemsToStore.push(listString);
		localStorage.setItem("itemsSaved", JSON.stringify(itemsToStore));
	}
	var mainContent = $('.main');
	var itemToAdd = $('.item-to-add');
	var totalPrice = 0;
	var itemsToStore = [];
	$(mainContent).on('click', '.remove-item', function(){
		var priceRemove = $(this).siblings('.the-price').text();
		var removePrice = parseInt(priceRemove, 10);
		totalPrice -= removePrice;
		replaceTotal();
		var removeClosestItem = $(this).closest('.list-item');
		$(removeClosestItem).fadeOut(1000, function(){
			removeThis();
		});
	});
	$('.add-item-button').click(function(){
		if ($(itemToAdd).val() == 0) {
			$(itemToAdd).val('Please Enter Item');
		}
		else{
			var addedItem = $(itemToAdd).val();
			var price = parseInt($('.estimated-price').val(),10);
			if (price == 0){
			totalPrice = totalPrice;
			var listString = '<li class="inserted-row"><div class="list-item"><p class="checkbox"><input type="checkbox">Got item</p><p class="item-name">'
							 + addedItem +'</p><button class="remove-item">Remove</button><p class="the-price">0</p></div></li>';
			addString(listString);
			storeTheItems(listString);
			}
			else {
			totalPrice += price;
			var listString = '<li class="inserted-row"><div class="list-item"><p class="checkbox"><input type="checkbox">Got item</p><p class="item-name">' 
							 + addedItem +'</p><button class="remove-item">Remove</button><p class="the-price">'+price+'</p></div></li>'
			addString(listString);
			storeTheItems(listString);
		}
	}
			});
	$('.reset-list').click(function(){
		$('.inserted-row').fadeOut(1000, function(){
			removeThis();
			totalPrice = 0;
			replaceTotal();
			window.localStorage.clear();
		});
	});
	$(mainContent).on('change', 'input[type=checkbox]', function() {
		if ($(this).prop('checked')==true){
			$(this).parent('.checkbox').siblings('.item-name')
			.css('text-decoration', 'line-through')
			.css('color', 'transparent')
			.css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
						}
		else { 
			$(this).parent('.checkbox').siblings('.item-name')
			.css('text-decoration', 'none')
			.css('color', 'black')
			.css('text-shadow', 'none');
		}
	});
});