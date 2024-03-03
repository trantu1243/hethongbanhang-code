import React from "react";
import { useNavigate } from "react-router-dom";


function Sell(){
    const navigate = useNavigate();
    function hoaDonBh(){
        navigate("/home/sell/sell_invoice");
    }
    
    function timKiemKh(){
        navigate("/home/sell/customer");
    }

    function timKiemSp(){
        navigate("/home/sell/product");
    }
    
    function hoaDonBanLe(){
        navigate("/home/sell/bill");
    }
    
    function phieuNhapHang(){
        navigate("/home/sell/goods_receipt");
    }
    
    function CTKhuyenMai(){
        navigate("/home/sell/sale");
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
    
    return (
        <div className="component-page">
            <div className="component-title">
                <img src="/images/sell.png" alt="" />
                <h1>BÁN HÀNG</h1>
            </div>
            <div className="component-content">
                <div className="ci1">
                    <div className="componet-select">
                    {
                        sellList.map(item => (
                            <div className="component-item" onClick={item.func}>
                                <div className="img-container">
                                    <img src={item.image} alt="" />
                                </div>
                                <p>{item.text}</p>
                            </div>
                        ))
                    }        
                    </div>
                </div>
                <div className="ci2">
                    <h3>Xem thống kê</h3>
                    <ul>
                        <li><p>TK kho</p></li>
                        <li><p>TK doanh thu</p></li>
                    </ul>
                    <div className="line"></div>
                    <h3>Hỗ trợ</h3>
                    <ul>
                        <li><p>Hướng dẫn sử dụng</p></li>
                        <li><p>Xem phim hướng dẫn</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sell;