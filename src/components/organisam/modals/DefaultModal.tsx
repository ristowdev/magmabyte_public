import React, { MouseEvent, SetStateAction } from 'react';

import { ChangeEvent, useState } from 'react';
import { BackDrop, ComponentName, Container, ExiteButton, HeaderInside, HeaderText, ModalContent, ModalHeader, ModalInside, PageComponentsList, SingleComponentList } from '.';
import {IoCloseSharp} from "react-icons/io5";

interface IDefaultModalProps {
    open?: boolean;
    onCloseModal: (active: boolean, reason?: 'backdropClick' | 'escapeKeyDown') => void;
    headerText: string;
    setChoosedComponent: Dispatch<SetStateAction<any>>;
    template?: string;
}

type Dispatch<A> = (value: A) => void;

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const tempalte_1_components: readonly any[] = [
    {
        name:'Left texts with right image',
        key:'leftTextsRightImage'
    },{
        name:'Add items and header',
        key:'addItemsAndHeader'
    },{
        name:'List of logos and center text',
        key:'listOfLogosAndTextCenter'
    },{
        name:'List of items with box and center text',
        key:'listOfItemsInBoxAndCenterText'
    },{
        name:'3 top articles',
        key:'threeTopArticles'
    },{
        name:'Get in touch form',
        key:'getInTouchForm'
    }
];


const tempalte_2_components: readonly any[] = [
    {
        name:'Long text area',
        key:'longTextArea'
    },{
        name:'Form with custom inputs',
        key:'formWithCustomInputs'
    }
];


export default function DefaultModal(props: IDefaultModalProps) {
    const {
        open,
        onCloseModal,
        headerText, 
        setChoosedComponent,
        template
    } = props;

    const handleChoosedComponent = (e: any, component: any) => {
        e.preventDefault();
        onCloseModal(false);
        setChoosedComponent(component);
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
                                <PageComponentsList>

                                    {template === 'Home page' && tempalte_1_components.map((_component)=>(
                                        <>
                                            <SingleComponentList onClick={(e) => {handleChoosedComponent(e, _component)}}>
                                                <ComponentName>{_component.name}</ComponentName>
                                            </SingleComponentList>
                                        </>
                                    ))}

                                    {template === 'Blog post' && tempalte_2_components.map((_component)=>(
                                        <>
                                            <SingleComponentList onClick={(e) => {handleChoosedComponent(e, _component)}}>
                                                <ComponentName>{_component.name}</ComponentName>
                                            </SingleComponentList>
                                        </>
                                    ))}
                                </PageComponentsList>   
                            </Container>
                            </ModalContent>
                    </ModalInside>
                </BackDrop> 
            }
        </>
    );
}