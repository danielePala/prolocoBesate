$(function() {
    var calendar = $("#calendario-eventi").calendar(
	{
	    tmpl_path: "/tmpls/",
	    events_source: "/data/eventi.json",
	    view: 'month',
	    language: 'it-IT',
	    weekbox: false,
	    onAfterViewLoad: function(view) {
		$('#mese-eventi').text(this.getTitle());
	    }
	});
    var mediaQueryList = window.matchMedia("(max-width: 650px)");
    mediaQueryList.addListener(handleSizeChange);
    $('.btn-group button[data-calendar-nav]').each(function() {
	var $this = $(this);
	$this.click(function() {
	    calendar.navigate($this.data('calendar-nav'));
	    handleSizeChange();
	});
    });
    calendar.navigate("today");
    function handleSizeChange(evt) {
	if (mediaQueryList.matches) {
	    $(".cal-row-head > .cal-cell1").text(function(i, oldText) {
		return oldText[0];
	    });
	} else {
	    $(".cal-row-head > .cal-cell1").text(function(i, oldText) {
		var ret = "";
		switch (i) {
		case 0:
		    ret = "Lunedì";
		    break;
		case 1:
		    ret = "Martedì";
		    break;
		case 2:
		    ret = "Mercoledì";
		    break;
		case 3:
		    ret = "Giovedì";
		    break;
		case 4:
		    ret = "Venerdì";
		    break;
		case 5:
		    ret = "Sabato";
		    break
		case 6:
		    ret = "Domenica";
		    break;
		}
		return ret;
	    });
	}
    };
});
