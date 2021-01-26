function newItem() {
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	li.append(inputValue);

	if ($('#input').val() === ' ') {
		alert('You must write something!');
		e.preventDefault();
	} else {
		$('#list').append(li);
	}

	$('#input').keydown(function (e) {
		if (e.which === 13) {
			e.preventDefault();
			$('li').append(inputValue);
			this.value = '';
		}
	});

	function crossOut() {
		li.toggleClass('strike');
	}

	li.on('dblclick', function crossOut() {
		li.toggleClass('strike');
	});

	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	crossOutButton.on('click', deleteListItem);

	function deleteListItem() {
		li.addClass('delete');
	}

	$('#list').sortable();
}
