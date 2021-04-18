document.write("PRINTING USING WRITE FUNCTION:   \n");
document.write("\n Javascript Is Fun\n");
document.write("<br/>");
document.write("<br/>");
document.write("\n DEMONSTRATION OF BUTTON: \n");

function change()
    { 
        var x = "javascript is fun\n" + "<br/>";
        document.getElementById('results').innerHTML = x+x+x+x+x;
    }
    