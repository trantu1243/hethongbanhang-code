import React from "react";

function StockStatistic(){

    return (
        <div className="component-page">
            <div className="component-title">
                <img src="/images/warehouse.png" alt="" />
                <div>
                    <h1>KHO</h1>
                    <p>THỐNG KÊ KHO</p>
                </div>
                
            </div>
            <div className="component-content">
                <div className="ci1">
                    <div className="form-component">
                        <h1>THỐNG KÊ KHO</h1>
                        <div className="sell-input">
                            <div className="input-item">
                                <label>MÃ TK: </label><input type="text" />
                            </div>
                            <div className="input-item">
                                <label>NGÀY LẬP TK: </label><input type="text" />
                            </div>
                            <div className="input-item">
                                <label>MÃ NHÂN VIÊN: </label><input type="text" />
                            </div>
                            
                        </div>

                        <div className="stock-statistic-table table">
                            <div className="sst-item1"><p>MÃ SẢN PHẨM</p></div>
                            <div className="sst-item2"><p>TÊN SẢN PHẨM</p></div>
                            <div className="sst-item3"><p>SỐ LƯỢNG NHẬP HÀNG</p></div>
                            <div className="sst-item4"><p>SỐ LƯỢNG XUẤT HÀNG</p></div>
                            <div className="sst-item5"><p>HÀNG TỒN ĐẦU KÌ</p></div>
                            <div className="sst-item6"><p>HÀNG TỒN CUỐI KÌ</p></div>
                            <div className="sst-item7"><p>TỔNG HÀNG TỒN</p></div>
                            <div className="sst-item8"><p></p></div>
                            <div className="sst-item9"><p></p></div>
                            <div className="sst-item10"><p></p></div>
                            <div className="sst-item11"><p></p></div>
                            <div className="sst-item12"><p></p></div>
                            <div className="sst-item13"><p></p></div>
                            <div className="sst-item14"><p></p></div>
                            <div className="sst-item15"><p>TỔNG</p></div>
                            <div className="sst-item16"><p></p></div>
                            <div className="sst-item17"><p></p></div>
                            <div className="sst-item18"><p></p></div>
                            <div className="sst-item19"><p></p></div>
                        </div>
                       
                        <div> 
                            <button className="save-button1">LƯU VÀ XUẤT PHIẾU</button>
                            <button>THOÁT</button>
                        </div>
                    </div>
                </div>
                <div className="ci2">
                    <div className="search1">
                        <div className="search-bar">
                            <input type="text" placeholder="Tìm kiếm sản phẩm" />
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20px" height="20px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="rgb(255, 164, 73)" stroke="none">
                                        <path d="M1940 5079 c-493 -25 -971 -242 -1334 -605 -295 -295 -496 -674 -570 -1075 -168 -910 277 -1807 1104 -2228 454 -231 994 -284 1489 -145 177 50 429 163 557 252 l59 40 605 -602 c546 -545 611 -606 670 -635 305 -147 651 109 591 437 -24 130 -23 129 -680 786 l-608 608 82 161 c138 272 201 499 226 802 44 550 -154 1119 -535 1533 -193 211 -404 365 -661 484 -154 71 -211 92 -354 128 -214 54 -401 71 -641 59z m355 -684 c555 -91 1005 -512 1133 -1060 108 -461 -25 -943 -353 -1284 -270 -280 -622 -431 -1007 -431 -371 0 -721 146 -987 411 -196 197 -323 433 -383 712 -31 146 -31 399 1 546 82 384 296 696 621 906 166 108 344 172 570 208 66 11 323 6 405 -8z"/>
                                    </g>
                                </svg>
                        
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="search-bar">
                            <input type="text" placeholder="Tìm kiếm thống kê" />
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20px" height="20px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="rgb(255, 164, 73)" stroke="none">
                                        <path d="M1940 5079 c-493 -25 -971 -242 -1334 -605 -295 -295 -496 -674 -570 -1075 -168 -910 277 -1807 1104 -2228 454 -231 994 -284 1489 -145 177 50 429 163 557 252 l59 40 605 -602 c546 -545 611 -606 670 -635 305 -147 651 109 591 437 -24 130 -23 129 -680 786 l-608 608 82 161 c138 272 201 499 226 802 44 550 -154 1119 -535 1533 -193 211 -404 365 -661 484 -154 71 -211 92 -354 128 -214 54 -401 71 -641 59z m355 -684 c555 -91 1005 -512 1133 -1060 108 -461 -25 -943 -353 -1284 -270 -280 -622 -431 -1007 -431 -371 0 -721 146 -987 411 -196 197 -323 433 -383 712 -31 146 -31 399 1 546 82 384 296 696 621 906 166 108 344 172 570 208 66 11 323 6 405 -8z"/>
                                    </g>
                                </svg>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockStatistic;