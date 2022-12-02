import React, { MouseEvent, SetStateAction, useEffect } from 'react';

import { ChangeEvent, useState } from 'react';
import { CloseSnackBar, InsideSnackBar, SnackBar, SnackBarMessage } from './styles';
import {TiWarningOutline} from "react-icons/ti";
import {IoClose} from "react-icons/io5";

interface IErrorMessage {
    open: boolean;
    onClose: Dispatch<SetStateAction<any>>;
    errorMessage: string;
}

type Dispatch<A> = (value: A) => void;

export default function ErrorMessage(props: IErrorMessage) {
    const { 
        open,
        onClose,
        errorMessage
    } = props;

    useEffect(()=>{
        let timer: ReturnType<typeof setTimeout>;
        if(open===true){
            timer = setTimeout(() => {
                onClose(false);
            }, 5000);
        }
    }, [open]);

    return (
        <>
            { open && (
                <SnackBar

                > 
                    <InsideSnackBar>
                        <TiWarningOutline 
                            size={25}
                            color="white"
                        /> 
                        <SnackBarMessage>{errorMessage}</SnackBarMessage>
                        <CloseSnackBar
                            onClick={(e) => {
                                onClose(false);
                            }}
                        >
                            <IoClose 
                                size={25}
                                color="white"
                            />
                        </CloseSnackBar>
                    </InsideSnackBar>
                </SnackBar>)    
            }
        </>
    );
}