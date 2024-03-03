import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import ErrorPage from './routes/errot-page';
import Login from './routes/login';
import Home from './routes/home';
import Manage from './routes/Manage/Manage';
import CEO from './routes/CEO/Ceo';
import Sell from './routes/Sell/Sell';
import Stock from './routes/Stock/Stock';
import SellInvoice from './routes/Sell/Sell_invoice';
import Bill from './routes/Sell/bill';
import Customer from './routes/Sell/customer';
import GoodsReceipt from './routes/Sell/goods_receipt';
import Product from './routes/Sell/product';
import Sale from './routes/Sell/Sale';
import EIproduct from './routes/Stock/imexproduct';
import StockProduct from './routes/Stock/stockproduct';
import StockStatistic from './routes/Stock/stockstatistic';
import EmployeeManage from './routes/Manage/employeemanage';
import ManageProduct from './routes/Manage/mangageproduct';
import ManageSuppier from './routes/Manage/managesupplier';
import RevenueStatistic from './routes/Manage/revenuestatistic';
import Decentralization from './routes/CEO/decentralization';

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/home/manage",
                children:[
                    {
                        path: "/home/manage",
                        element: <Manage />,
                    },
                    {
                        path: "/home/manage/manageemployee",
                        element: <EmployeeManage />
                    },
                    {
                        path: "/home/manage/manageproduct",
                        element: <ManageProduct />
                    },
                    {
                        path: "/home/manage/managesupplier",
                        element: <ManageSuppier />
                    },
                    {
                        path: "/home/manage/revenuestatistic",
                        element: <RevenueStatistic />
                    },
                ],
            },
            {
                path: "/home/CEO",
                children:[
                    {
                        path: "/home/CEO",
                        element: <CEO />,
                    },
                    {
                        path: "/home/CEO/decentralization",
                        element: <Decentralization />,
                    },
                ],
            },
            {
                path: "/home/sell",
                children:[
                    {
                        path: "/home/sell",
                        element: <Sell />,
                    },
                    {
                        path: "/home/sell/sell_invoice",
                        element: <SellInvoice />
                    },
                    {
                        path: "/home/sell/customer",
                        element: <Customer />
                    },
                    {
                        path: "/home/sell/product",
                        element: <Product />
                    },
                    {
                        path: "/home/sell/bill",
                        element: <Bill />
                    },
                    {
                        path: "/home/sell/goods_receipt",
                        element: <GoodsReceipt />
                    },
                    {
                        path: "/home/sell/sale",
                        element: <Sale />
                    },
                ],
            },
            
            {
                path: "/home/stock",
                children: [
                    {
                        path: "/home/stock",
                        element: <Stock />,
                    },
                    {
                        path: "/home/stock/eiproduct",
                        element: <EIproduct />
                    },
                    {
                        path: "/home/stock/stockproduct",
                        element: <StockProduct />
                    },
                    {
                        path: "/home/stock/stockstatistic",
                        element: <StockStatistic />
                    },
                ],
            },
            
            
        ],
    },
    {
        path:"/",
        element: <Login />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
