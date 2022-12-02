import React from 'react';
import { ChangeEvent, useState } from 'react';
import { ControlInput, Input, InputContainer } from './styles';


interface ICustomInputProps {
    id?: string;
    name?: string;
    labelText?: string;
    labelProps?: any;
    labelClass?: string;
    className?: string;
    inputProps?: any;
    handleChange?: (e: ChangeEvent) => void;
    type?: string;
    placeholder?: string;
    value?: string;
    error?: boolean;
    defaultValue?: string;
}

export default function CustomInput(props: ICustomInputProps) {
    const {
        id,
        name,
        labelText,
        labelProps,
        labelClass,
        className,
        inputProps,
        handleChange,
        type,
        placeholder,
        value,
        error,
        defaultValue
    } = props;

    // const [value, setValue] = useState<string>('');


    const handleInputChange = (e: ChangeEvent) => {
        if (handleChange) handleChange(e);
        // setValue((e.target as HTMLInputElement).value);
    };


    return (
        <ControlInput>
            {labelText !== undefined ? (
                <label className={'input-label ' + labelClass + ` ${error && 'cd-i-4df-felf'}` } for={id} {...labelProps} style={{marginBottom:'5px'}}>
                    {!error && labelText}
                    {error && '* '+labelText}
                </label>
            ) : null}
            <InputContainer>
                <Input 
                    id={id}
                    name={name}
                    className={className + ` ${error && 'i-4df-felf'}`}
                    value={value}
                    type={type} 
                    onChange={handleChange}
                    {...inputProps}
                    onKeyDown={event => {
                        event.stopPropagation();
                    }}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            </InputContainer>
        </ControlInput>
    );
}
