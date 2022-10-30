
// function add() {

// }
function checkKey() {
    var key = document.getElementById("key").value;
    document.getElementById("key").innerHTML = key;
    // var key = prompt("Input your key:", "");
    var arr = new Array;

    arr["users"] = "users.html";
    arr["about"] = "about.html";
    arr["key"] = "key.html";
    arr["update"] = "update.html";
    arr["about"] = "about.html";
    arr["test"] = "files/testfile.txt";
    arr["foi"] = "https://zrc4889.github.io/Cpp-Code/";
    arr["csp1"] = "https://zrc4889.github.io/Cpp-Code/Blue";

    if (arr[key] == undefined) {
        document.getElementById("text").innerText = "Sorry, the key is incorrect.😔";
    }
    else {
        location.href = (arr[key]);
    }
}
