$( document ).ready(function() {

  smoothScroll(1000);
  workbelt();
  workLoad();

});

function smoothScroll(duration) {
	$('a[href^="#"]').on('click', function(event){

		var target = $( $(this).attr('href') );

		if(target.length){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top 
				}, duration);
		}

	});
}

function workbelt(){
	$('.thumb-unit').click(function(event){
		event.preventDefault();
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});
	$('.work-return').click(function(event){
		event.preventDefault();
		$('.work-belt').css('left','0%');
		$('.work-container').hide();
	});

}

function workLoad() {

	$.ajaxSetup({ cache: true });

	$('.thumb-unit').click(function(event){

		event.preventDefault();	
		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newfolder = $this.data('folder'),
		    spinner = '<div class="loader">Loading...</div>',
			newHTML = '/work/'+ newfolder +'.html';
		$('.project-title').text(newTitle);	
		$('.project-load').html(spinner).load(newHTML); 

	});

}