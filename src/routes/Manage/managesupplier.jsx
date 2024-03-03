import React from "react";

function ManageSuppier(){
    const items = [];
    for (let i = 5; i <= 12; i++) {
        items.push(<div className={`sut-item${i}`} key={i}><p></p></div>);
    }
    return (
        <div className="component-page">
            <div className="component-title">
                <img src="/images/manage.png" alt="" />
                <div>
                    <h1>QUẢN LÝ CỬA HÀNG</h1>
                    <p>QUẢN LÝ NHÀ CUNG CẤP</p>
                </div>
                
            </div>
            <div className="component-content">
                <div className="ci1">
                    <div className="form-component">
                        
                        <div className="supplier-table table">
                            <div className="sut-item1"><p>MÃ NCC</p></div>
                            <div className="sut-item2"><p>TÊN NCC</p></div>
                            <div className="sut-item3"><p>ĐỊA CHỈ</p></div>
                            <div className="sut-item4"><p>LIÊN HỆ</p></div>
                            {items}
                        </div>
                        <div className="sell-input">
                            <div className="input-item">
                                <label>MÃ NHÀ CUNG CẤP: </label><input type="text" />
                            </div>
                            <div className="input-item">
                                <label>TÊN NHÀ CUNG CẤP: </label><input type="text" />
                            </div>
                            <div className="input-item">
                                <label>ĐỊA CHỈ: </label><input type="text" />
                            </div>
                            <div className="input-item">
                                <label>LIÊN HỆ: </label><input type="text" />
                            </div>
                            
                        </div>

                        <div> 
                            <button className="save-button1">LƯU</button>
                            <button className="save-button1">SỬA</button>
                            <button>XÓA</button>
                        </div>
                        
                       
                        
                    </div>
                </div>
                <div className="ci2">
                    <div className="search1">
                        <div className="search-bar">
                            <input type="text" placeholder="Tìm kiếm nhà cung cấp" />
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

export default ManageSuppier;