$( document ).ready(function() {

  smoothScroll(1000);
  workbelt();
  workLoad();
  clientStuff();


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





function clientStuff(){

	$('.client-unit').first().addClass('active-client');
	$('.client-logos img').first().addClass('active-client');

	$('.client-logos img').click(function(){
		// alert("hito hito");
		var $allimg = $(this).parent().children();
		var position = $allimg.index($(this));
		$('.client-logos img').removeClass('active-client');
		$(this).addClass('active-client');
		$('.client-unit').removeClass('active-client');
		$('.client-unit').eq(position).addClass('active-client');

	});



	$('.rarrow').click(function(){

			 var thisUnit = $('.client-unit.active-client').index();
			 var total = $('.client-unit').parent().children().length;

			 console.log(thisUnit);
			
			if( thisUnit == total-1)
			{
				$('.client-unit').removeClass('active-client').first().addClass('active-client');
				$('.client-logos img').removeClass('active-client').first().addClass('active-client');

			}
			else{		
				$('.client-unit.active-client').removeClass('active-client').next().addClass('active-client');
				$('.client-logos img.active-client').removeClass('active-client').next().addClass('active-client');

			}
		});

		$('.larrow').click(function(){

			var thisUnit = $('.client-unit.active-client').index();
			var total = $('.client-unit').parent().children().length;


			
			if( thisUnit == 0)
			{
				$('.client-unit').removeClass('active-client').last().addClass('active-client');
				$('.client-logos img').removeClass('active-client').last().addClass('active-client');

			}
			else{		
				$('.client-unit.active-client').removeClass('active-client').prev().addClass('active-client');
				$('.client-logos img.active-client').removeClass('active-client').prev().addClass('active-client');

			}
		});

}