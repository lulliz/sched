$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});

$(document).ready(function () {
    var d = new Date();
    var n = d.getDay();

	if (n == 1) {
		$('#collapse1').addClass("in");
	}
	else if (n == 2) {
		$('#collapse2').addClass("in");
	}
	else if (n == 3) {
		$('#collapse3').addClass("in");
	}
	else if (n == 4) {
		$('#collapse4').addClass("in");
	}
	else if (n == 5) {
		$('#collapse5').addClass("in");
	}
});