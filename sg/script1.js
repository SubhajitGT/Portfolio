$('#contact-form').submit(fuction(e){
	var name1 = document.getElementById('name'),
	    email1 = document.getElementById('email'),
		message1 = document.getElementById('submit');
		
	if(!name1.value || !email1.value || !message1.value)
	{
		alertify.error('Please check your entries')
	}
	else
	{
		$.ajax({
			url: "https://formspree.io/subhajitguha79@gmail.com",
			method: "POST",
			data: $(this).serialize(),
			dataType: "json"
		});
		e.preventDefault()
		$(this).get(0).reset()
		alertify.success('Message sent')
	}
})