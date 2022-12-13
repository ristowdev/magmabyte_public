import React from 'react';
import { ChangeEvent, useState } from 'react';
import { ControlInput, InputContainer } from '../Inputs/styles';
import { ControlCheckBox } from './styles';


interface IDefaultCheckBoxProps {
    id?: string;
    labelText?: string;
    labelProps?: any;
    labelClass?: string; 
    className?: string;
    inputProps?: any;
    // handleChange?: (e: ChangeEvent) => void;
    type?: string;
    placeholder?: string;
    options?: any;
    name?: string;
    defaultValue?: boolean;
}

export default function DefaultCheckBox(props: IDefaultCheckBoxProps) {
    const {
        id,
        labelText,
        labelProps,
        labelClass,
        className,
        inputProps,
        // handleChange,
        type,
        placeholder,
        options,
        name,
        defaultValue
    } = props;
    // const [value, setValue] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // setChecked(e.target.value === true ? true : false);
        setChecked(event.target.checked)
        
    };

    // console.log(checked);
    return (    
        <ControlCheckBox>  
            <input 
                type="checkbox" 
                id={id}
                style={{
                    scale:'1.1', 
                    cursor:'pointer'
                }}
                // value={value}
                // checked={checked}
                // onChange={handleChange}
                name={name} 
                defaultChecked={defaultValue}
            />  
            <label 
                 htmlFor={id}
                 style={{
                    fontSize: '.875rem',
                    fontWeight: '400',
                    color: "#8493a5",
                    cursor:'pointer',
                    marginLeft:'8px'
                 }}
            >
                {labelText && labelText}
            </label>
        </ControlCheckBox>
    );
}
