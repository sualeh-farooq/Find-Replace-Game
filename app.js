function search() {
    var userInput = prompt("Enter paragraph to start").toLowerCase();
    var find = prompt("Please Enter a Word to find").toLowerCase();
    var replace = prompt("Please Enter a Word to replace").toLowerCase();
    document.getElementById("output").value;

    if (userInput === "") {
        swal("You haven't Type Parapraph");
    } else if (find === "") {
        swal("You haven't type any word to find");
    } else if (replace === "") {
        swal("You haven't Type any word to replace");
    } else {
        var index = userInput.indexOf(find);

        for (var i = 0; i <= userInput.length; i++) {
            if (index !== -1) {
                userInput = userInput.split(find).join(replace);
                document.getElementById("output").innerHTML =
                    "<b>" +
                    "Paragraph after Your Word Replace" + "<b>" + "<br />" + (userInput);
                break;
            } else {
                swal("No Word Found");
                break;
            }
        }
    }
}