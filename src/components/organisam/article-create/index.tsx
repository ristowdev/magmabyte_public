import React, { MouseEvent, ReactElement, SetStateAction, useEffect } from 'react';
import InputWithMoreDetails2 from '../../atoms/Inputs/InputWithMoreDetails2';
import DefaultTextEditor from '../../atoms/TextEditors/DefaultTextEditor';
 
interface ICreateArticleProps {
    
}
 
type Dispatch<A> = (value: A) => void;
  
export default function CreateArticle(props: ICreateArticleProps) {
    
    const {
        
    } = props;

 
    return (
        <>
            <InputWithMoreDetails2
                name="article_name"
                labelText="Article name"
                placeholder='Enter article name'
                className='edit-input'
                type='text'
            />      
            <div style={{marginTop:'20px', marginBottom:'15px'}}>
                <label className='input-label ' style={{marginBottom:'5px'}}>
                    Article content                            
                </label>
            </div>

            <DefaultTextEditor />

            <div style={{marginBottom:'15px'}}></div>
        </>
    );
}

