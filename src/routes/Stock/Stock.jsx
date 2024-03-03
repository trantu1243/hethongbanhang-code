import React from "react";
import { useNavigate } from "react-router-dom";

function Stock(){
    const navigate = useNavigate();
    function nhapXuatSp(){
        navigate("/home/stock/eiproduct");
    }
    
    function timKiemSp(){
        navigate("/home/stock/stockproduct");
    }
    
    function thongKeKho(){
        navigate("/home/stock/stockstatistic");
    }
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
    return (
        <div className="component-page">
            <div className="component-title">
                <img src="/images/warehouse.png" alt="" />
                <h1>KHO</h1>
            </div>
            <div className="component-content">
                <div className="ci1">
                    <div className="componet-select">
                    {
                        stockList.map(item => (
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

export default Stock;