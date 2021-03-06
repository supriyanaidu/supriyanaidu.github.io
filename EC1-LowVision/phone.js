$(document).ready(function() { // do this when the document is loaded
	$("#idContentDialer").show(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();
	$("#idContentHelp").hide();
});
$("#dialerTab").click(function() { // when "button_id" is clicked
	$("#idContentDialer").show(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();
	$("#idContentHelp").hide();
});
$("#contactListTab").click(function() { // when "button_id" is clicked
	$("#idContentDialer").hide(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").show();
	$("#idContentHelp").hide();
});
$("#newContactTab").click(function() { // when "button_id" is clicked
	$("#idContentDialer").hide(); // show the element with ID "element"
	$("#idContentNewContact").show(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();
	$("#idContentHelp").hide();
});
$("#helpTab").click(function() { // when "button_id" is clicked
	$("#idContentDialer").hide(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();
	$("#idContentHelp").show();
});

//switching style sheets ref: https://stackoverflow.com/questions/7846980/how-do-i-switch-my-css-stylesheet-using-jquery
$('#largeStyle').click(function (){
   $('link[href="style.css"]').attr('href','phone-large.css');
});
$('#normalStyle').click(function (){
   $('link[href="phone-large.css"]').attr('href','style.css');
});
// function populateDialer(dialerNumber) {
// 	var currentNumber = document.getElementByID("dialerPrompt").value;
// 	currentNumber = currentNumber + dialerNumber;
// 	document.getElementByID("dialerPrompt").value=dialerNumber;
// }

/* fancy dialing functions from Shaun's solution*/
$("#dialer_pad button").click(function() {
	$("#dialerPrompt").val($("#dialerPrompt").val() + this.innerText);
})

$("#dialerClear").click(function() {
	$("#dialerPrompt").val("");
})
