$(document).ready(function() { // do this when the document is loaded
	$("#idContentDialer").show(); // show the element with ID "element"
	$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
	$("#idContentContactList").hide();
});
$("#dialerTab").click(function() { // when "button_id" is clicked
$("#idContentDialer").show(); // show the element with ID "element"
$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
$("#idContentContactList").hide();
});
$("#contactListTab").click(function() { // when "button_id" is clicked
$("#idContentDialer").hide(); // show the element with ID "element"
$("#idContentNewContact").hide(); // hide the element with ID "otherElement"
$("#idContentContactList").show();
});
$("#newContactTab").click(function() { // when "button_id" is clicked
$("#idContentDialer").hide(); // show the element with ID "element"
$("#idContentNewContact").show(); // hide the element with ID "otherElement"
$("#idContentContactList").hide();
});
function populateDialer(dialerNumber) {
	var currentNumber = document.getElementByID("dialerPrompt").value;
	currentNumber = currentNumber + dialerNumber;
	document.getElementByID("dialerPrompt").value=dialerNumber;
}
