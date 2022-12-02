import React, { MouseEvent, ReactElement } from 'react';
import { ChangeEvent, useState } from 'react';
import { Component } from './styles';


interface IDefaultComponentProps {
    className?: string;
    headerTitle?: string;
    children?: ReactElement;

}

export default function DefaultComponent(props: IDefaultComponentProps) {
    const {
        className,
    } = props;
    
    return (
        <Component className={className}>
            
        </Component>
    );
}
