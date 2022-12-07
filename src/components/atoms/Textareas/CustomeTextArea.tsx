import React, { MouseEvent } from 'react';

import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'


interface ICustomTextAreaProps {
    className?: string;
    text?: string;
    placeholder?: string;
    name: string;
    defaultValue?:string;
}

export default function CustomTextArea(props: ICustomTextAreaProps) {
    const {
        className,
        text,
        placeholder,
        name,
        defaultValue
    } = props;

    return (
        <div style={{display:'flex'}}>
          
                <textarea
                    className={className}
                    placeholder={placeholder}
                    name={name}
                    defaultValue={defaultValue}
                >
                    {/* {defaultValue ? defaultValue : ''} */}
                </textarea>
               
        </div>
    );
}