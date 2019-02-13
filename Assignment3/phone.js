$(document).ready(function() { // do this when the document is loaded
	$("#idContentDialer").show(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();
});
$("#dialerTab").click(function() { // when "button_id" is clicked
	$("#idContentDialer").show(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();

	$("#dialerTab").addClass("current-tab");
	$("#contactListTab").removeClass("current-tab");
	$("#newContactTab").removeClass("current-tab");
});
$("#contactListTab").click(function() { // when "button_id" is clicked
	$("#idContentDialer").hide(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").show();

	$("#dialerTab").removeClass("current-tab");
	$("#contactListTab").addClass("current-tab");
	$("#newContactTab").removeClass("current-tab");
});
$("#newContactTab").click(function() { // when "button_id" is clicked
	$("#idContentDialer").hide(); // show the element with ID "element"
	$("#idContentNewContact").show(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();

	$("#dialerTab").removeClass("current-tab");
	$("#contactListTab").removeClass("current-tab");
	$("#newContactTab").addClass("current-tab");
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
