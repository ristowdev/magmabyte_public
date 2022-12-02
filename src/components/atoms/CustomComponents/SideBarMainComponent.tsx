import React, { MouseEvent, ReactElement } from 'react';
import { ChangeEvent, useState } from 'react';
import { Component, MainLeft, SideBarComponent, SideBarRight } from './styles';


interface ISideBarMainComponentProps {
    className?: string;
    headerTitle?: string;
    leftElements?: ReactElement;
    rightElements?: ReactElement;
}

export default function SideBarMainComponent(props: ISideBarMainComponentProps) {
    const {
        className,
        leftElements,
        rightElements,
    } = props;
    
    return (
        <SideBarComponent className={className}>
            <MainLeft>
                {leftElements}
            </MainLeft>
            <SideBarRight>
                {rightElements}
            </SideBarRight>
        </SideBarComponent>
    );
}
