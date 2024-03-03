import React from "react";
import { useNavigate } from "react-router-dom";

function Manage(){
    const navigate = useNavigate();
    function qlNhanVien(){
        navigate("/home/manage/manageemployee");
    }
    
    function qlSanPham(){
        navigate("/home/manage/manageproduct");
    }
    
    function qlNhaCungCap(){
        navigate("/home/manage/managesupplier");
    }
    
    function thongKe(){
        navigate("/home/manage/revenuestatistic");
    }
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
    return (
        <div className="component-page">
            <div className="component-title">
                <img src="/images/manage.png" alt="" />
                <h1>QUẢN LÝ CỬA HÀNG</h1>
            </div>
            <div className="component-content">
                <div className="ci1">
                    <div className="componet-select" >
                    {
                        manageList.map(item => (
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

export default Manage;