
function checkUser() {
    var username = document.getElementById("username").value;
    var arr = new Array;

    arr["admin"] = 100;
    arr["zrc4889"] = 99;
    arr["tree_one_"] = 99;
    arr["nullptr"] = 99;

    // 100 管理员

    if (arr[username] == 100) {
        document.getElementById("user-tag").innerHTML = "<span class=\"tag-purple\">管理员</span>";
        return;
    } if (arr[username] == 99) {
        document.getElementById("user-tag").innerHTML = "<span class=\"tag-red\">吉祥物</span>";
        return;
    }
    if (arr[username] == 1) {
        document.getElementById("user-tag").innerHTML = "You have no tag. 😥";
        return;
    }
    else {
        document.getElementById("user-tag").innerHTML = "You are not yet registered. 😥";
        return;
    }

}
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
