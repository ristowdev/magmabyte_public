import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteActionButton, EditActionButton } from './styles';
import {RiDeleteBin5Line} from "react-icons/ri";
import {FiEdit2} from "react-icons/fi";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
 
interface IMagmabyteTableProps {
    columns?:any;
}
 
// export const products = [
//     {
//       image: "/images/productImage.png",
//       name: "Ritai Organic Orange Juice",
//       group: "Bakery",
//       shop: "Bakery Shop",
//       priceOrUnit: 1.8,
//       quantity: 50,
//       status: "published",
//     },
//     {
//       image: "/images/productImage.png",
//       name: "Baby Spinach",
//       group: "Makeup",
//       shop: "Bakery Shop",
//       priceOrUnit: 1.8,
//       quantity: 50,
//       status: "published",
//     },
//     {
//       image: "/images/productImage.png",
//       name: "Lipstick",
//       group: "Grocery",
//       shop: "Bakery Shop",
//       priceOrUnit: 1.8,
//       quantity: 50,
//       status: "published",
//     },
//   ];
  
//   export const users = [
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["super_admin", "customer", "store_owner"],
//       availableWalletPoints: "",
//       status: "active",
//       blocked: false,
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["super_admin", "customer"],
//       availableWalletPoints: "",
//       status: "active",
//       blocked: false,
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["super_admin", "customer"],
//       availableWalletPoints: "",
//       status: "active",
//       blocked: true,
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["super_admin", "customer"],
//       availableWalletPoints: "",
//       status: "active",
//       blocked: false,
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["super_admin", "customer"],
//       availableWalletPoints: "",
//       status: "active",
//       blocked: false,
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["store_owner", "customer"],
//       availableWalletPoints: "",
//       status: "active",
//       blocked: true,
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["super_admin", "customer"],
//       availableWalletPoints: "",
//       status: "inactive",
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Customer",
//       email: "customer@demo.com",
//       permissions: ["super_admin", "customer"],
//       availableWalletPoints: "",
//       status: "inactive",
//     },
//     {
//       logo: "/images/shopLogo.png",
//       name: "Asdfg",
//       email: "customer@demo.com",
//       permissions: ["customer", "store_owner"],
//       availableWalletPoints: "",
//       status: "inactive",
//     },
//   ];

  

export default function MagmabyteTable(props: IMagmabyteTableProps) {
    const {
        columns
    } = props;

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // const [columnDefs, setColumnDefs] = useState([
    //     {
    //       headerName: "ID",
    //       field: "id",
    //       maxWidth: 80,
    //       rowHeight: 45,
    //     },
    //     {
    //       headerName: "Banner",
    //       field: "image",
    //       maxWidth: 120,
    //       rowHeight: 65,
    //       rowStyle: { "border-bottom": "white 20px solid" },
    //     },
    //     {
    //       headerName: "Code",
    //       field: "name",
    //       minWIdth: 100,
    //     },
    //     {
    //       headerName: "Amount",
    //       field: "quantity",
    //       minWidth: 100,
    //     },
    //     {
    //       headerName: "Active",
    //       field: "shop",
    //       maxWidth: 160,
    //     },
    //     {
    //       headerName: "Expired",
    //       field: "products",
    //       maxWidth: 160,
    //     },
    //     {
    //       headerName: "Actions",
    //       field: "shopStatus",
    //       maxWidth: 100,
    //       sortable: false,
    //     },
    //   ]);

    return (
        <>  
            {/* <AgGridReact
            animateRows={true}
            rowSelection="multiple"
            overlayLoadingTemplate={`<span className="ag-overlay-loading-center">Loading...</span>`}
            suppressRowClickSelection={true}
            domLayout="autoHeight"
            groupDefaultExpanded={1}
            groupSelectsChildren={true}
            noRowsOverlayComponent={`<span className="ag-overlay-loading-center">No data found</span>`}
            pagination={true}
            paginationPageSize={3}
            rowData={products}
             
        /> */}

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Visibility</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {columns?.map((col: any)=>(
                        <>
                            <tr>
                                <td data-column="Title">{col.page_title}</td>
                                <td data-column="Status">{capitalizeFirstLetter(col.page_status)}</td>
                                <td data-column="Visibility">{capitalizeFirstLetter(col.page_visibility)}</td>
                                <td data-column="Actions">
                                    <div style={{display:'flex'}}>
                                        <Link to={`/page/${col._id}`} className='d-2--ed-ds-'>
                                            <EditActionButton>
                                                <FiEdit2 
                                                    size={16}
                                                    color='#00a7ff'
                                                />
                                            </EditActionButton>
                                        </Link>
                                        {/* FiEdit2 */}
                                        <DeleteActionButton onClick={(e)=>{}}>
                                            <RiDeleteBin5Line 
                                                size={16}
                                                color='#ff2d2d'
                                            />
                                        </DeleteActionButton>

                                    </div>
                                </td>
                            </tr>
                        </>
                    ))}
                     
                </tbody>
            </table>
        </>
    )
}