function view_text(){
    // Finding the HTML elements by id
    var textArea = document.getElementById('text_editor');
    var div = document.getElementById('view_text');

    // Putting text in variable so it can be manipulated
    var text = textArea.value;

    //Disabling HTML and PHP tags
    text = text.replace(/\</gi, "<");
    text = text.replace(/\>/gi, ">");

    // Basic BBCodes
    text = text.replace(/\[b\]/gi, "<b>");
    text = text.replace(/\[\/b\]/gi, "</b>");

    text = text.replace(/\[i\]/gi, "<i>");
    text = text.replace(/\[\/i\]/gi, "</i>");

    text = text.replace(/\[u\]/gi, "<u>");
    text = text.replace(/\[\/u\]/gi, "</u>");

    text = text.replace(/\n/gi, "<br />");

    // Print the text in the div we made for it
    div.innerHTML = text;

}

function mod_selection(val1, val2){
    // Get the text area
    var textArea = document.getElementById('text_editor');

    // Do we have a selection?
    if(typeof(textArea.selectionStart) != "undefined"){
        // Split text in three pieces - the selection, what comes before, after
        var begin = textArea.value.substr(0, textArea.selectionStart);
        var selection = textArea.value.substr(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart);
        var end = textArea.value.substr(textArea.selectionEnd);

        // Insert tags between the selected text
        textArea.value = begin + val1 + selection + val2 + end;
    }
}
