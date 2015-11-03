(function(){

	'use strict';

	$(document).ready(init);

  // Initialize data from local storage
  var information = localStorage.information ? JSON.parse(localStorage.information) : [];
  updateList();

  function init() {
  	$('#submit').click(addNew);
  	$('#list').on('change', 'input', checkboxChecked);
  	$('#list').on('click', '.remove', removeCont);
  	$('#ashley').on('click','edit', updateContact);

  }

  function removeCont(e) {
  	var $target = $(e.target);
  	var $targetRow = $target.closest('tr');

  	var index = $targetRow.index();
  	information.splice(index, 1);

  	updateList();
  	saveLocalStorage();
  }

  function checkboxChecked(e) {
  	var $target = $(e.target);
  	var $targetRow = $target.closest('tr');

  	var idex = $targetRow.index();
  	tasks[index].completed = $target.is('checked');

  	updateList();
  	saveLocalStorage();

  }


  }

//I need to go through and make the modal connect with the check mark to say which one should be changed OR add the model button to each new line that pops up.

function addNew() {       //function addNew turns each piece of info into a value
	var friend = $('#friend').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var address = $('#address').val();

    // var infotype = new info(description, date);

    var info = {   // this info is stored to be pushed
    	friend: friend,
    	email: email,
    	phone: phone,
    	address: address,
    	completed: false
    };

    information.push(info); //pushes info to the list

    updateList();
    saveLocalStorage();
}

  function updateList() {      //when information is sent to the table the table shows
  	console.log('information:', information);
  	$('#list').empty();

  	if(information.length){
  		$('table.table').show();
  	} else {
  		$('table.table').hide();
  	}

  	var taskElements = information.map(function(info){
  		var $tr = $('#sample').clone();
  		$tr.removeAttr('id');
  		$tr.children('.friend').text(info.friend);
  		$tr.children('.email').text(info.email);
  		$tr.children('.phone').text(info.phone);
  		$tr.children('.address').text(info.address);
  		// $tr.find('input').prop('checked'), task.completed;
  		$tr.show();
  		return $tr;
  	});
  	$('#list').append(taskElements);
  }

  function saveLocalStorage() {
  	localStorage.information = JSON.stringify(information);
  }

  // function Task(description, date) {
  //   this.description = description;
  //   this.date = date;
  //   this.completed = false;
  // }

})();