import React, { SetStateAction, useEffect } from 'react';
import { InsideEditSection } from './style';
 
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import { Form, Field } from 'react-final-form'
import InputWithMoreDetails2 from '../../../atoms/Inputs/InputWithMoreDetails2';
import DefaultTextEditor from '../../../atoms/TextEditors/DefaultTextEditor';
import DefaultFileUploader from '../../../atoms/FileUploaders/DefaultFileUploader';
import InstantFileUploader from '../../../atoms/FileUploaders/InstantFileUploader';
  
interface ILongTextAreaProps {
    data?: any;
    setLongTextAreaEditorVal: Dispatch<SetStateAction<any>>;

}
type Dispatch<A> = (value: A) => void;
   
export default function LongTextArea(props: ILongTextAreaProps) {
    const { 
        data,
        setLongTextAreaEditorVal
    } = props;


    useEffect(()=>{
        if(data?.longTextArea[0]?.page_content){
            setLongTextAreaEditorVal(data?.longTextArea[0]?.page_content);
        }
    }, [data?.longTextArea[0]?.page_content]);
    console.log(data);
    return (
      <InsideEditSection>

            {/* <DefaultFileUploader
                id="thumbnail"
                labelText='Thumbnail'
                name='thumbnail'
                // defaultValue={data?.leftTextsRightImage}
            /> */}
            <InstantFileUploader
                id={`items.0.icon`}
                labelText='Thumbnail'
                name={`items.0.icon`}
                __id={0}
                defaultValue={data&&data?.longTextArea[0]?.thumbnail || ""}
                // defaultValue={data?.leftTextsRightImage}
            />
            <br/>

            <InputWithMoreDetails2
                name="main_text"
                labelText="Main text"
                placeholder='About us / Our team ...'
                className='edit-input'
                type='text'
            />
            
            <div style={{marginTop:'20px', marginBottom:'15px'}}>
                <label className='input-label ' style={{marginBottom:'5px'}}>
                    Page content                           
                </label>
            </div>

            <DefaultTextEditor
                onEditorChange={setLongTextAreaEditorVal}
                initialValue={data&&data?.longTextArea[0]?.page_content as string}
            />
 

      </InsideEditSection>
              
    );
}
    
    