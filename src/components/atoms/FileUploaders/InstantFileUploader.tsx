import React, { useEffect, useMemo, useRef, useState } from 'react'; 
// import type { InputHTMLAttributes } from "react";
import { Form, Field } from 'react-final-form'
import { Input } from './styles';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { useUploadImageMutation } from '../../../slices/media/mediaApiSlices';
import { IMAGE_URL } from '../../../consts';

interface IFileUploaderProps {
    name: any;
    className?: any;
    labelText?: string;
    labelClass?: string;
    id?: string;
    __id: number;
    defaultValue: string;
}
  
export default function InstantFileUploader(props: IFileUploaderProps) {
    const {
        name,
        className,
        labelText,
        labelClass,
        id,
        __id,
        defaultValue
    } = props; 
    const inputRef = useRef<string>(defaultValue);

    const [uploadImage,
        { isLoading: isUploadingImage }, // This is the destructured mutation result
    ] = useUploadImageMutation();

    const [image, setImage] = useState();

    const uploadImageInstant = async (_ci: number) => {
        var __element = document.querySelector("input[name='items."+_ci+".icon']");
        var element_name = document.querySelector("input[name='items."+_ci+".icon_name']");
        var icon_name = (element_name as HTMLInputElement);
        const icon = (__element as HTMLInputElement);
        const payload = new FormData();
        if(icon.files && icon.files.length > 0){  

            payload.append("file", icon.files[0]); 
            uploadImage(payload)
            .then((res: any) => {
                // console.log(res.data.file_name);
                const image = res.data.file_name;
                // navigate(`/page/${data.page_id}`);
                icon_name.value = image;
                setImage(image);
                // console.log(icon_name.value)
                
                inputRef.current = image;
            }) 
            .then((error) => {
            });
        }

        // alert(icon_name.value)
    }

    useEffect(()=>{
        if(image){
            var element_name = document.querySelector("input[name='items."+__id+".icon_name']");
            var icon_name = (element_name as HTMLInputElement);
            icon_name.value = image;
        }
    }, [image]);
 
    
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

                       
                    
                    {!image && (
                            <input 
                                type="hidden"
                                name={`items.${__id}.icon_name`}
                                id={`items.${__id}.icon_name`}
                                defaultValue={defaultValue}
                            />
                        )} 
                        {image && (
                            <input 
                            type="hidden"
                            name={`items.${__id}.icon_name`}
                            id={`items.${__id}.icon_name`}
                            defaultValue={image}
                        />         
                        )}

                    <div 
                        style={{
                            display:'flex',
                            alignItems:'center',
                            width:'100%'
                        }}
                    >
                        {!image && defaultValue && (
                            <img 
                                src={`${IMAGE_URL+defaultValue}`} 
                                style={{
                                    width:'40px',
                                    height:'40px', 
                                    objectFit:'contain',
                                    marginRight:'10px',
                                    borderRadius:'5px'
                                }}
                            />
                        )}
                        {image && (
                            <img 
                                src={`${IMAGE_URL+image}`} 
                                style={{
                                    width:'40px',
                                    height:'40px', 
                                    objectFit:'contain',
                                    marginRight:'10px',
                                    borderRadius:'5px'
                                }}
                            />
                        )}
                        <Input
                            type="file"
                            id={id}
                            accept="image/png, image/gif, image/jpeg"
                            name={name}
                            onChange={()=>uploadImageInstant(__id)}
                            style={{
                                backgroundColor:'white',
                                width:'100%'
                            }}
                            // defaultValue={data?.leftTextsRightImage}
                        />
                    </div>

                    
                    {isUploadingImage && (
                        <div
                            style={{

                                marginTop:'10px',
                            }}
                        >
                            <span 
                                style={{
                                    fontSize:'13px',
                                    color:'#2196f3',
                                }}
                            >
                                Uploading... Please wait before save changes!
                            </span>
                        </div>
                    )}
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