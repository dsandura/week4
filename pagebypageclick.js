var counter;
var bcount =0;


$(document).on('pagecreate','#first_page', function() {
//     alert('Pagecreate fired');
});

$(document).on('pageinit','#first_page',function() {
	$('#bigbutton').on('click', function(e) {
		bcount++;
		console.log('pageinit - button click!');
		console.log('bcount is: ' + bcount);

//		e.stopPropagation();
	    });

	$('#main-content').on('click', function() {
		bcount++;
		console.log('div code - button click!');
		console.log('bcount is: ' + bcount);
	   });
	$('#first_page').on('click', function() {
		bcount++;
		console.log('page code - a click!');
		console.log('bcount is: ' + bcount);
	   });



     counter = 1;
	$('#pageoneanchor').on('click',function(e)
	{
	    //		alert("Hopped back to page one!");
	    console.dir(e);
	});

});

$(document).on('pagebeforeshow','#first_page',function(event, ui)
{
        
	if (counter >1){
		$('#pageonetextline').append(' and forth');
	}
});
$(document).on('pageshow','#first_page',function(event, ui)
{
    //	alert('Pageshow fired and counter is ' + counter);
	counter = counter + 1;
});
$(document).on('pagebeforehide','#first_page',function(event, ui)
{
//	alert('Pagebeforehide fired');
});
$(document).on('pagehide','#first_page',function(event, ui)
{
	$('#pageonetextline').append(' and back');
});
$(document).on('pagehide','#second_page',function(event, ui)
{
});