function cong() {
    let sothu1 = document.getElementById("sothu1").value;
    let sothu2 = document.getElementById("sothu2").value;
    let a = parseInt(sothu1);
    let b = parseInt(sothu2);
    let ketQua = a+b;
    document.getElementById("result").innerHTML = ketQua;
}
function tru() {
    let sothu1 = document.getElementById("sothu1").value;
    let sothu2 = document.getElementById("sothu2").value;
    let a = parseInt(sothu1);
    let b = parseInt(sothu2);
    let ketQua = a-b;
    document.getElementById("result").innerHTML = ketQua;
}
function nhan() {
    let sothu1 = document.getElementById("sothu1").value;
    let sothu2 = document.getElementById("sothu2").value;
    let a = parseInt(sothu1);
    let b = parseInt(sothu2);
    let ketQua = a*b;
    document.getElementById("result").innerHTML = ketQua;
}
function chia() {
    let sothu1 = document.getElementById("sothu1").value;
    let sothu2 = document.getElementById("sothu2").value;
    let a = parseInt(sothu1);
    let b = parseInt(sothu2);
    let ketQua = a/b;
    document.getElementById("result").innerHTML = ketQua;
}