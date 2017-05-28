$(function() {
    var calendar = $("#calendario-eventi").calendar(
	{
	    tmpl_path: "/tmpls/",
	    events_source: "{{ $.Site.BaseURL }}data/eventi.json",
	    view: 'month',
	    language: 'it-IT',
	    weekbox: false,
	    onAfterViewLoad: function(view) {
		$('#mese-eventi').text(this.getTitle());
	    }
	});

    $('.btn-group button[data-calendar-nav]').each(function() {
	var $this = $(this);
	$this.click(function() {
	    calendar.navigate($this.data('calendar-nav'));
	});
    });
    calendar.navigate("today");
});
