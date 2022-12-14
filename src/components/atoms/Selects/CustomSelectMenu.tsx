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
    options?: any;
    name?: string;
    defaultValue?: string;
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
        options,
        name,
        defaultValue
    } = props;

    console.log(options);
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value; 
    };
    return (
        <ControlInput style={{marginTop:'10px'}}>
            {labelText !== undefined ? (
                <label className={'input-label ' + labelClass} for={id} {...labelProps} style={{marginBottom:'5px'}}>
                    {labelText}
                </label>
            ) : null}
            <InputContainer>
                <select
                    className={className} 
                    onChange={selectChange}
                    name={name}
                    defaultValue={defaultValue}
                >
                    {options && options.map((_o:any)=> (
                        <option value={_o.key}>{_o.name}</option>
                    ))}
                </select>
            </InputContainer>
        </ControlInput>
    );
}
