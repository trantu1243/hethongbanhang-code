
function hoaDonBh(){

}

function timKiemKh(){

}

function hoaDonBanLe(){

}

function phieuNhapHang(){

}

function CTKhuyenMai(){

}

function nhapXuatSp(){

}

function timKiemSp(){
    
}

function thongKeKho(){

}

function qlNhanVien(){

}

function qlSanPham(){

}

function qlNhaCungCap(){

}

function thongKe(){

}

function phanQuyen(){

}

const sellList = [
    {
        image:"/images/bill2.png",
        text:"BẢNG KÊ BÁN HÀNG",
        func:hoaDonBh,
    },
    {
        image:"/images/search.png",
        text:"TÌM KIẾM KHÁCH HÀNG",
        func:timKiemKh,
    },
    {
        image:"/images/product-search.png",
        text:"TÌM KIẾM SẢN PHẨM",
        func:timKiemSp,
    },
    {
        image:"/images/bill.png",
        text:"HÓA ĐƠN BÁN HÀNG",
        func:hoaDonBanLe,
    },
    {
        image:"/images/paper.png",
        text:"PHIẾU NHẬP HÀNG",
        func:phieuNhapHang,
    },
    {
        image:"/images/flash_sale.png",
        text:"CT KHUYẾN MÃI",
        func:CTKhuyenMai,
    },
];

const stockList = [
    {
        image:"/images/import_good.png",
        text:"NHẬP XUẤT SẢN PHẨM",
        func:nhapXuatSp,
    },
    {
        image:"/images/product-search.png",
        text:"TÌM KIẾM SẢN PHẨM",
        func:timKiemSp,
    },
    {
        image:"/images/warehouse_statistic.png",
        text:"THỐNG KÊ KHO",
        func:thongKeKho,
    },
];

const manageList = [
    {
        image:"/images/employee-management.png",
        text:"QL NHÂN VIÊN",
        func:qlNhanVien,
    },
    {
        image:"/images/product.png",
        text:"QL SẢN PHẨM",
        func:qlSanPham,
    },
    {
        image:"/images/supplier.png",
        text:"QL NHÀ CUNG CẤP",
        func:qlNhaCungCap,
    },
    {
        image:"/images/statistic.png",
        text:"THỐNG KÊ",
        func:thongKe,
    },
];

const ceoList = [
    {
        image:"/images/employee-management.png",
        text:"QL NHÂN VIÊN",
        func:qlNhanVien,
    },
    {
        image:"/images/product.png",
        text:"QL SẢN PHẨM",
        func:qlSanPham,
    },
    {
        image:"/images/supplier.png",
        text:"QL NHÀ CUNG CẤP",
        func:qlNhaCungCap,
    },
    {
        image:"/images/statistic.png",
        text:"THỐNG KÊ",
        func:thongKe,
    },
    {
        image:"/images/decentralization.png",
        text:"PHÂN QUYỀN",
        func:phanQuyen,
    }
];

export {manageList, stockList, sellList, ceoList};