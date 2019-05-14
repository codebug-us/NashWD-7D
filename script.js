$(document).ready(function(){

$("#send-button").click(function(){
	console.log("the button was clicked");
	var ourMessage=$("#message-box").val();
	console.log(ourMessage);


	var request = $.ajax({
 		url: "https://hooks.slack.com/services/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",
 		method: "POST",
 		data: JSON.stringify({text:ourMessage}),
 	});
 	request.done(function(response){
 		console.log("Slack response: ", response);
 	});


});



});