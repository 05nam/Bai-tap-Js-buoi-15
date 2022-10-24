
function tinhDiem() {
    var mon01 = document.getElementById("number__1").value ;
    var mon02 = document.getElementById("number__2").value ;
    var mon03 = document.getElementById("number__3").value ;
    console.log(mon01, mon02, mon03);

    //* Diểm tổng 3 môn
    var diem3Mon = Number(mon01) + Number(mon02) + Number (mon03);
    console.log("diem3Mon", diem3Mon)

    //! Chọn đối tượng  ưu tiên 
    var doiTuong1 = document.getElementById("object1");
    var doiTuong2 = document.getElementById("object2");
    var doiTuong3 = document.getElementById("object3");
    var doituong0 = document.getElementById("object0");

    
    var doiTuong = doiTuongUuTien(doiTuong1,doiTuong2, doiTuong3, doituong0 );
        console.log("diem cong doi tuong: ",doiTuong);

    //! Chọn khu vực ưu tiên
    var khuVuc_A = document.getElementById("areaA");
    var khuVuc_B = document.getElementById("areaB");
    var khucVuc_C = document.getElementById("areaC");
    var khuVuc_0 = document.getElementById("areaK");
    var khuVuc = khuVucUuTien(khuVuc_A, khuVuc_B,khucVuc_C, khuVuc_0 );
    console.log("diem uu tien khu vuc: ", khuVuc);

    //! điểm tổng 
    var diemTong = diem3Mon + doiTuong + khuVuc;
    console.log(" diem tong = ",diemTong);

    //! điểm chuẩn
    var diemChuan = document.getElementById("diemchuan").value ;

    //! so sanh diem tong và diem chuan
    if (diemTong >= diemChuan ) {
        document.getElementById("text_bt1").innerHTML= "OK - Chúc Mừng Bạn"
        
    }else(
        document.getElementById("text_bt1").innerHTML= "Ohh - Bạn quá tệ "
    )
    
}

//! Chọn đối tượng  ưu tiên 

function doiTuongUuTien(doiTuong1, doiTuong2, doiTuong3, doituong0) {
    var doiTuong = 0;
    if (doiTuong1.checked) {
        doiTuong = 2.5;
        // console.log("doi tuong 1")
    }else if (doiTuong2.checked) {
        doiTuong = 1.5;
        // console.log("doi tuong 2")
    }else if (doiTuong3.checked) {
        doiTuong = 1;
        // console.log("doi tuong 3")
    }else if (doituong0.checked) {
        doiTuong = 0;
        // console.log("doi tuong 0")
    }else(
        alert (" CHỌN ĐỐI TƯỢNG ƯU TIÊN !!!")
    )
    return doiTuong;
}

//! Chọn khu vực ưu tiên

function khuVucUuTien(khuVuc_A, khuVuc_B, khucVuc_C, khuVuc_0) {
    var khuVuc = 0;
    if (khuVuc_A.checked) {
        khuVuc = 1;        
    }else if (khuVuc_B.checked) {
        khuVuc = 2;
    }else if (khucVuc_C.checked) {
        khuVuc = 3;
    }else if (khuVuc_0) {
        khuVuc = 0;
    }else(
        alert ("Vui lòng chọn khu vực ưu tiên ")
    )
    return khuVuc;
    
}


















document.getElementById("btn__01").onclick = tinhDiem;
