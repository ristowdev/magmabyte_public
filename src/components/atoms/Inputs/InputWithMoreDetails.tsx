import React from 'react';
import { ChangeEvent, useState } from 'react';
import { ControlInput, Input, InputContainer } from './styles';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { Form, Field } from 'react-final-form'

interface IInputWithMoreDetailsProps {
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
    defaultValue?:string;
    
}

export default function InputWithMoreDetails(props: IInputWithMoreDetailsProps) {
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
        defaultValue,
    } = props;

    const [value, setValue] = useState<string>(defaultValue?defaultValue:'');


    const handleInputChange = (e: ChangeEvent) => {
        if (handleChange) handleChange(e);
        setValue((e.target as HTMLInputElement).value);
    };

    // alert(value);

    return (
        <ControlInput>
            {labelText !== undefined ? (
                <div style={{display:'flex', alignItems:'center', marginBottom:'8px'}} className="label-more-details">
                    <label className={'input-label ' + labelClass} htmlFor={id} {...labelProps} style={{marginBottom:'5px'}}>
                        {labelText}
                    </label>
                    <AiOutlineQuestionCircle 
                        size={17} 
                        style={{
                            marginTop:'-5px',
                            marginLeft:'10px'
                        }}
                        color="#9a9a9a"
                    />
                </div>
            ) : null}
            <InputContainer>
            {/* <Field name="main_text_left2" component="input" placeholder="First Name" /> */}

            <Field name={name || ''}>
                {({ input, meta }) => (
                    <Input 
                        {...input}
                        id={id}
                        name={name}
                        className={className}
                        value={value}
                        type={type} 
                        onChange={handleInputChange}
                        {...inputProps}
                        onKeyDown={event => {
                            event.stopPropagation();
                        }}
                        placeholder={placeholder}
                        // defaultValue={defaultValue}
                    />
                )}
            </Field>
            </InputContainer>
        </ControlInput>
    );
}
