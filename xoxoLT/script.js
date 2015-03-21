$(document).ready(function()
{
	// Login button
	$('.lin').mouseenter(function()
	{
		$(this).fadeTo('fast', 0.7);
	});
	$('.lin').mouseleave(function()
	{
		$('.lin').fadeTo('fast', 1.0);
	});
	// Sign up button
	$('.sig').mouseenter(function()
	{
		$(this).fadeTo('fast', 0.7);
	});
	$('.sig').mouseleave(function()
	{
		$(this).fadeTo('fast', 1.0);
	});
	// Submit button
	$('.subm').mouseenter(function()
	{
		$(this).fadeTo('fast', 0.7);
	});
	$('.subm').mouseleave(function()
	{
		$(this).fadeTo('fast', 1.0);
	});
	// Form toggle
	$('.sig').click(function(){
		$('#form').slideToggle(250);
	});
});