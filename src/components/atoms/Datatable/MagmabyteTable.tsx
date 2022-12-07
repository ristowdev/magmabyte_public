import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteActionButton, EditActionButton } from './styles';
import {RiDeleteBin5Line} from "react-icons/ri";
import {FiEdit2} from "react-icons/fi";

interface IMagmabyteTableProps {
    columns?:any;
}

export default function MagmabyteTable(props: IMagmabyteTableProps) {
    const {
        columns
    } = props;

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>  
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