function calcu() {
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);
    if (num1 > "99999999999") {
        document.querySelector(".result").innerHTML = "Excess Number is recieved"
    }
    if (num2 > "99999999999") {
        document.querySelector(".result").innerHTML = "Excess Number is recieved"

    } else if (num1 > num2) {
        document.querySelector(".result").innerHTML = num1 + " is greater than " + num2
    } else if (num2 > num1) {
        document.querySelector(".result").innerHTML = num2 + " is greater than " + num1
    } else if (num1 == num2) {
        document.querySelector(".result").innerHTML = "Both numbers are equal"


    } else {
        document.querySelector(".result").innerHTML = "Something went wrong..."

    }

}

function cno() {
    var outputhtml = "";
    var n1 = parseFloat(document.getElementById("second2").value);
    for (var i = 0; i <= n1; i++) {
        if (n1 % i == 0) {
            console.log(i);
            outputhtml += i + "|";
            document.querySelector(".result2").innerHTML = n1 + " is divisible by " + outputhtml
        }
    }
}