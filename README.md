# Posting to Slack

We've already learned a little about APIs, so let's see if we can create an app that sends messages to Slack! 

### Incoming Webhooks
- Slack allows us to POST messages to their API, and it calls this process an "Incoming Webhook". 
- Navigate to Slack's documentation for [Incoming Webhooks](https://api.slack.com/incoming-webhooks). Scroll down to the section called "Getting Started with Incoming Webhooks" and follow the directions. 
- Create a Slack App and pick the "Codebug.us" workspace when creating.
- Select "Incoming Webhooks" when it asks what features you'd like to add. 
- Click the "ON" switch in the top right corner of the box to activate our incoming webhooks. 
- Scroll down to the bottom and click "Add New Webhook to Workspace"
- Select our "Rogue AI" channel that we created for posting our messages. 
- Take a look at the "Sample CURL request". We're going to send our API request via AJAX (like we've done before), but you'll need to look at the CURL request to get an idea of how our request should be structured. 

	**Things to notice:**
		(1) We are sending a POST request
		(2) We pass a data parameter (where the data is JSON) that looks like an object with the key `text` pointing to our message: `{text: 'your message'}`


### Time to code
- Open up the `index.html` file and let's add a textarea (with an ID of `message-box`) for us to type our messages. There's some preset styling in our `styles.css` file so our page will look a little nicer. 
- Next, let's add a button to our html page. Add the text "Send To Slack" and put an ID on it (ID: `send-button`)
- Now, navigate to our script.js file and let's capture the `click` event of our button. We can grab the jQuery object of our button by it's ID, and then inside our `click` event, let's add `console.log("Button clicked");`. Refresh your HTML page and see if it worked. 
- If that worked, let's go ahead and collect the message out of our textarea when the button is clicked. Inside the `click` function use the jQuery `val()` function to `console.log` what has been typed in the textarea when the button is clicked. 
- If that worked, save the value of the textarea in a variable called `ourMessage`. 
- Now it's time to send our message to Slack. Look back over the **Things to notice** above. We're going to be sending a POST request to Slack. AJAX post requests look something like this and should go inside your `click` function: 
	```
		var request = $.ajax({
			url: "url goes here",
			method: "POST",
			data: JSON.stringify(slackData),
		});
		request.done(function(response){
			console.log("Slack response: ", response);
		});
	```
- Steps to complete on your own: 
	- Find the proper Slack URL from the Slack API webpage. It should be called "Webhook URL".
	- Our message needs to be formatted correctly as a JavaScript object with the key being `text` and the value being `ourMessage`. 
	- Because Slack needs us to send them JSON-formatted data, we'll need to put our JavaScript object containing our message into JSON format by running the `JSON.stringify` command above. 
	- When you've got everything set up, refresh your html page, type a message, and click "Send To Slack". See if the message is posted in our Slack channel! 
