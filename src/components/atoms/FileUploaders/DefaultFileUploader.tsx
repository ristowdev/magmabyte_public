import React, { useMemo, useState } from 'react'; 
// import type { InputHTMLAttributes } from "react";
import { Form, Field } from 'react-final-form'
import { Input } from './styles';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

interface IFileUploaderProps {
    name: any;
    className?: any;
    labelText?: string;
    labelClass?: string;
    id?: string;
}
  
export default function DefaultFileUploader(props: IFileUploaderProps) {
    const {
        name,
        className,
        labelText,
        labelClass,
        id
    } = props; 
    return (
        <>  
            {/* <input 
                type="file" 
            /> */}
            <Field<FileList> name={name}>
                {({ meta, input: { value, onChange, ...input }  }) => (
                    <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
                    
                    {labelText !== undefined ? (
                        <div style={{display:'flex', alignItems:'center', marginBottom:'8px'}} className="label-more-details">
                            <label className={'input-label ' + labelClass + ` ${meta.touched && meta.error && 'cd-i-4df-felf'}`} htmlFor={id} style={{marginBottom:'5px'}}>
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
                    <Input
                        type="file"
                        id={id}
                        accept="image/png, image/gif, image/jpeg"
                        name={name} 
                        // defaultValue={data?.leftTextsRightImage}
                    />
                    </div>
                )}
            </Field>
            {/* <Field name={name}>
                {({ uploadFiles, meta }) => (
                    <input 
                        {...uploadFiles}
                        type="file"
                        // id={id}
                        name={name}
                        className={className + ` ${meta.touched && meta.error && 'i-4df-felf'}`}
                        onChange={({ target }) => onChange(target.files)}
                        // className={className}
                        // value={value}
                        // type={type} 
                        // onChange={handleInputChange}
                        // {...inputProps}
                        // onKeyDown={event => {
                        //     event.stopPropagation();
                        // }}
                        // placeholder={placeholder}
                        // defaultValue={defaultValue}
                    />
                )}
            </Field> */}
        </>
    )
}