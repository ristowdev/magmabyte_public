import React, { MouseEvent } from 'react';

import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';


interface ICustomTextAreaProps {
    className?: string;
    text?: string;
    placeholder?: string;
}

export default function CustomTextArea(props: ICustomTextAreaProps) {
    const {
        className,
        text,
        placeholder
    } = props;

    return (
        <div style={{display:'flex'}}>

            <textarea
                className={className}
                placeholder={placeholder}
            >
                {text}
            </textarea>
        </div>
    );
}