
/**
 * Đầu vào 
 * lương nhân viên 1 ngày: 100.000 VND
 * Số ngày nhân viên làm
 * 
 * Xủ lý
 * Tổng lương nhân viên = lương nhân viên * só ngày nhân viên làm.
 * 
 * Đầu ra:
 * Xuất lương Nhân viên
 * 
 */

document.getElementById("btnToTalSalary").onclick = function () {
    var Staff = document.getElementById("staff").value;
    var working_Date = document.getElementById("workingDate").value * 1;
    // var oneDay_Salarry = parseInt(document.getElementById("oneDaySalary").value);

    /**  var oneDay_Salarry = "100000"; 
     *   oneDay_Salarry = parseInt(oneDay_Salarry); 
     * */

    var oneDay_Salarry = 100000;

    var Salary = "Nhân viên: " + Staff;
    Salary += "<br/>";
    Salary += "Tổng lương:" + working_Date * oneDay_Salarry;


    document.getElementById("infoSalary").innerHTML = Salary;


}


/**
 * Đầu vào:
 * 1 USD =23500 VND
 * 
 * Xử lý:
 * Quy đỏi tiền tệ / số usd nhập =  23500 * số tiền VND nhập
 * 
 * Đầu ra
 * Xuất số tiền USD đã quy đổi
 * 
*/

document.getElementById("btnToTalCurrency").onclick = function () {
    var vnd = 23500;
    var usd = document.getElementById("usd").value * 1;

    var Exchange = "VND: " + vnd;
    Exchange += "<br/>";
    Exchange += "USD: " + usd;
    Exchange += "<br/>";
    Exchange += "Tổng tiền quy đổi:" + usd * vnd;


    document.getElementById("infoCurrency").innerHTML = Exchange;


}


/**
 * Đầu vào:
 * Chiều dài
 * Chiều rộng 
 * 
 * Xử lý:
 * Diện tích =  (Dài + Rộng) *2
 * Chu vi =  Dài * Rộng
 * Đầu ra
 * Xuất Diện tích và Chu vi Hình chữ nhật  đã quy đổi
 * 
*/

document.getElementById("btnToTalRectangle").onclick = function () {
    var longs = document.getElementById("longs").value * 1;
    var width = document.getElementById("width").value * 1;

    var perimeter = (longs + width) * 2;
    var area = longs * width;

    var toTalRectangle = "Hình chữ nhật có:";

    toTalRectangle += "<br/>";
    toTalRectangle += "Chu vi : " + perimeter;
    toTalRectangle += "<br/>";
    toTalRectangle += "Diện tích : " + area;
    toTalRectangle += "<br/>";


    document.getElementById("infoRectangle").innerHTML = toTalRectangle;


}


