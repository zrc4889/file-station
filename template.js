
// function add() {

// }
function checkKey() {
    var key = document.getElementById("key").value;
    document.getElementById("key").innerHTML = key;
    // var key = prompt("Input your key:", "");
    var arr = new Array;

    arr["users"] = "https://zrc4889.github.io/users.html";
    arr["about"] = "https://zrc4889.github.io/about.html";
    arr["key"] = "https://zrc4889.github.io/key.html";
    arr["update"] = "https://zrc4889.github.io/update.html";
    arr["about"] = "https://zrc4889.github.io/about.html";
    arr["foi"] = "https://zrc4889.github.io/Cpp-Code/";
    arr["csp1"] = "https://zrc4889.github.io/Cpp-Code/Blue";

    if (arr[key] == undefined) {
        document.getElementById("text").innerText = "Sorry, the key is incorrect.😔";
    }
    else {
        location.href = (arr[key]);
    }
}
