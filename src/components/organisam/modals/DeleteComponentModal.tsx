import React, { MouseEvent, SetStateAction } from 'react';

import { ChangeEvent, useState } from 'react';
import { BackDrop, Buttons, ComponentName, Container, DeleteAsk, Dtext, ExiteButton, HeaderInside, HeaderText, ModalContent, ModalHeader, ModalInside, PageComponentsList, SingleComponentList } from '.';
import {IoCloseSharp} from "react-icons/io5";
import SuccessButton from '../../atoms/Buttons/CustomButtons';

interface IDefaultModalProps {
    open?: boolean;
    onCloseModal: (active: boolean, reason?: 'backdropClick' | 'escapeKeyDown') => void;
    headerText: string;
    deleteText: string;
    // setChoosedComponent: Di
    setConfirmedDelete: (active: boolean, reason?: 'allowDelete') => void;
    componetForDeleting: any,
}

type Dispatch<A> = (value: A) => void;

 
export default function DeleteComponentModal(props: IDefaultModalProps) {
    const {
        open,
        onCloseModal,
        headerText, 
        deleteText,
        setConfirmedDelete,
        componetForDeleting
    } = props;

    const handleChoosedComponent = (e: any, component: any) => {
        e.preventDefault();
        onCloseModal(false);
        // setChoosedComponent(component);
    }
    
    return (
        <>
            {open && 
                <BackDrop onClick={()=>{onCloseModal(false)}}>
                    <ModalInside onClick={(e) => {
                        e.stopPropagation();
                    }}>

                        <ModalHeader>
                            <HeaderInside>
                                <HeaderText>{headerText}</HeaderText>   
                                <ExiteButton onClick={()=>{onCloseModal(false)}}>
                                    <IoCloseSharp 
                                        size={18}
                                    />
                                </ExiteButton>
                            </HeaderInside>


                        </ModalHeader>

                        <ModalContent>
                            <Container>
                                <DeleteAsk>
                                    <Dtext>{deleteText}</Dtext>
                                    <Buttons>
                                        <SuccessButton 
                                            className='d34f-431-ccxd'
                                            label='Delete'
                                            onClick={()=>{
                                                setConfirmedDelete(true);
                                                onCloseModal(false)
                                            }}
                                        />
                                        <SuccessButton 
                                            className='d24f-431-ccxd'
                                            label='Cancle'
                                            onClick={()=>onCloseModal(false)}
                                        />
                                    </Buttons>
                                </DeleteAsk>
                            </Container>
                            </ModalContent>
                    </ModalInside>
                </BackDrop> 
            }
        </>
    );
}