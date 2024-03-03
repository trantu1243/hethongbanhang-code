import React, {useState, useEffect} from "react";
import { Outlet, useNavigate, useLocation} from "react-router-dom";

function Root(){    
    const navigate = useNavigate();
    const location = useLocation();
    const [checkHome1, setCheckHome1] = useState(false);
    const [checkHome2, setCheckHome2] = useState(false);
    const [checkHome3, setCheckHome3] = useState(false);
    const [checkHome4, setCheckHome4] = useState(false);
    const [checkHome5, setCheckHome5] = useState(false);
    
    const currentLocation = location.pathname;
    useEffect(()=>{
        if(currentLocation === "/home") setCheckHome1(true);
        else setCheckHome1(false);
        if(currentLocation === "/home/sell" || currentLocation.search("/home/sell") > -1) setCheckHome2(true);
        else setCheckHome2(false);
        if(currentLocation === "/home/stock" || currentLocation.search("/home/stock") > -1) setCheckHome3(true);
        else setCheckHome3(false);
        if(currentLocation === "/home/manage" || currentLocation.search("/home/manage") > -1) setCheckHome4(true);
        else setCheckHome4(false);
        if(currentLocation === "/home/CEO" || currentLocation.search("/home/CEO") > -1) setCheckHome5(true);
        else setCheckHome5(false);
    },[currentLocation]);

    function navigateHome(){
        navigate("/home");
    }

    function navigateSell(){
        navigate("/home/sell");
    }

    function navigateStock(){
        navigate("/home/stock");
    }

    function navigateManage(){
        navigate("/home/manage");
    }

    function navigateCEO(){
        navigate("/home/CEO");
    }

    return(
        <>
            <div id="sidebar">
                <div className="list">
                    <div className="list-title">
                        <h3>Chức năng</h3>
                    </div>

                    <ul>
                        <li><p>Hóa đơn bán hàng</p></li>
                        <li><p>Phiếu thanh toán tiền mặt</p></li>
                        <li><p>Phiếu thanh toán CN</p></li>
                        <li><p>Phiếu nhận hàng trả</p></li>
                        <li><p>CT khuyến mãi</p></li>
                    </ul>

                </div>
                <div className="list">
                    <div className="list-title">
                        <h3>Tổng hợp</h3>
                    </div>
                    <ul>
                        <li><p>Bảng kê bán hàng</p></li>
                        <li><p>BK thanh toán tiền mặt</p></li>
                        <li><p>BK thanh toán CN</p></li>
                        <li><p>Bảng kê trả hàng</p></li>
                        <li><p>Khuyến mãi</p></li>
                    </ul>
                </div>
                <div className="grid-container">
                    <div className="item1" onClick={navigateHome} style={checkHome1 ? {backgroundColor: "rgb(241, 120, 0)"} : {backgroundColor: "rgb(255, 164, 73)"}}><p>Trang chủ</p></div>
                    <div className="item2" onClick={navigateSell} style={checkHome2 ? {backgroundColor: "rgb(241, 120, 0)"} : {backgroundColor: "rgb(255, 164, 73)"}}><p>Bán hàng</p></div>
                    <div className="item3" onClick={navigateStock} style={checkHome3 ? {backgroundColor: "rgb(241, 120, 0)"} : {backgroundColor: "rgb(255, 164, 73)"}}><p>Kho</p></div>
                    <div className="item4" onClick={navigateManage} style={checkHome4 ? {backgroundColor: "rgb(241, 120, 0)"} : {backgroundColor: "rgb(255, 164, 73)"}}><p>Quản lý</p></div>
                    <div className="item5" onClick={navigateCEO} style={checkHome5 ? {backgroundColor: "rgb(241, 120, 0)"} : {backgroundColor: "rgb(255, 164, 73)"}}><p>Chủ cửa hàng</p></div>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Root;