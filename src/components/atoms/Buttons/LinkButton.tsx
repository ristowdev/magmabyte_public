import React, { MouseEvent } from 'react';

import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, LinkButtonInside } from './styles';


interface ICustomButtonProps {
    linkTo: string;
    buttonText: string;
    className?: string;
    buttonStyle?: string;
}

export default function LinkButton(props: ICustomButtonProps) {
    const {
        linkTo,
        buttonText,
        className,
        buttonStyle,
    } = props;

    return (
        <Link 
            to={linkTo}
            className={className}
        >
            <LinkButtonInside
                className={buttonStyle}
            >
                {buttonText}
            </LinkButtonInside>
        </Link>
    );
}