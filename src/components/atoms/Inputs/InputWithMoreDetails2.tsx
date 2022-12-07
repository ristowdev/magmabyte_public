import React from 'react';
import { ChangeEvent, useState } from 'react';
import { ControlInput, Input, InputContainer } from './styles';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { Form, Field } from 'react-final-form'

interface IInputWithMoreDetailsProps {
    id?: string;
    name: string;
    labelText?: string;
    labelProps?: any;
    labelClass?: string;
    className?: string;
    inputProps?: any;
    handleChange?: (e: ChangeEvent) => void;
    type?: string;
    placeholder?: string;
    
}

export default function InputWithMoreDetails2(props: IInputWithMoreDetailsProps) {
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
    } = props;

    const [value, setValue] = useState<string>('');


    const handleInputChange = (e: ChangeEvent) => {
        if (handleChange) handleChange(e);
        setValue((e.target as HTMLInputElement).value);
    };

    // alert(value);
    const getVehiclesErrors = (errors:any) => {
        return Array.isArray(errors)
          ? errors.filter((email, i, arr) => arr.indexOf(email) === i)
          : errors;
      };

    return (
        <ControlInput>
            <Field 
                name={name}
            >
                {({ input, meta }) => (
                    <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
                        {labelText !== undefined ? (
                            <div style={{display:'flex', alignItems:'center', marginBottom:'8px'}} className="label-more-details">
                                <label className={'input-label ' + labelClass + ` ${meta.touched && meta.error && 'cd-i-4df-felf'}`} htmlFor={id} {...labelProps} style={{marginBottom:'5px'}}>
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
                            <Input 
                                type={type} 
                                {...input} 
                                name={name}
                                placeholder={placeholder} 
                                className={className + ` ${meta.touched && meta.error && 'i-4df-felf'}`}
                            />
                            {/* <div>{meta.touched && getVehiclesErrors(meta.error)}</div> */}
                        </InputContainer>
                    </div>
                )}
            </Field>
        </ControlInput>
    );
}
