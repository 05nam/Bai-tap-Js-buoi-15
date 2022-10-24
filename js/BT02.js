/**
 * input: nhập số điện đã sử dụng
 * var soDien
 * tính tiền điện
 * 
 *  50kwDau = soDien * 500
 *  50kwKe = 50*500 + (soDien - 50)*650
 *  100kwKe = 50*500 + 50*650 + (soDien - 100)*850
 *  150kwKe = 50*500 + 50*650 + 100*850 +(soDien - 200)*1100
 *  conLai = 50*500 + 50*650 + 100*850 + 150*1100 + (soDien - 250)*1300
 */

function tinhTienDien() {
    var soDien = document.getElementById("number__bt2").value;
    console.log(soDien)
    tien = tienDien(soDien);
    console.log(tien);
    document.getElementById("text_bt2").innerHTML = tien+' Vnd';
}


function tienDien(soDien) {
    var tien = 0;
    if (soDien<=50) {
        tien = soDien*500;
        
    }else if (soDien>50 && soDien<=100) {
        tien = 50*500 + (soDien-50)*650;
    }else if (soDien>100 && soDien<=200) {
        tien = 50*500 + 50*650 + (soDien - 100)*850;
    }else if (soDien>200 && soDien<=250) {
        tien = 50*500 + 50*650 + 100*850 +(soDien - 200)*1100
    }else(
        tien =  50*500 + 50*650 + 100*850 + 150*1100 + (soDien - 250)*1300
    )
    return tien;
}


document.getElementById("btn__02").onclick = tinhTienDien;