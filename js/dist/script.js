function newItem() {
	let t = $('<li></li>'),
		n = $('#input').val();
	t.append(n),
		' ' === $('#input').val()
			? (alert('You must write something!'), e.preventDefault())
			: $('#list').append(t),
		$('#input').keydown(function (t) {
			13 === t.which &&
				(t.preventDefault(), $('li').append(n), (this.value = ''));
		}),
		t.on('dblclick', function () {
			t.toggleClass('strike');
		});
	let l = $('<crossOutButton></crossOutButton>');
	l.append(document.createTextNode('X')),
		t.append(l),
		l.on('click', function () {
			t.addClass('delete');
		}),
		$('#list').sortable();
}
