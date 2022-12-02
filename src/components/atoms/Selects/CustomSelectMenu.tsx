import React from 'react';
import { ChangeEvent, useState } from 'react';
import { ControlInput, InputContainer } from '../Inputs/styles';


interface ICustomeSelectMenuProps {
    id?: string;
    labelText?: string;
    labelProps?: any;
    labelClass?: string;
    className?: string;
    inputProps?: any;
    handleChange?: (e: ChangeEvent) => void;
    type?: string;
    placeholder?: string;
}

export default function CustomeSelectMenu(props: ICustomeSelectMenuProps) {
    const {
        id,
        labelText,
        labelProps,
        labelClass,
        className,
        inputProps,
        handleChange,
        type,
        placeholder,
    } = props;



    return (
        <ControlInput>
            {labelText !== undefined ? (
                <label className={'input-label ' + labelClass} for={id} {...labelProps} style={{marginBottom:'5px'}}>
                    {labelText}
                </label>
            ) : null}
            <InputContainer>
                <select className={className}>
                    <option>Choose</option>
                </select>
            </InputContainer>
        </ControlInput>
    );
}
