import React, { MouseEvent, ReactElement, SetStateAction, useEffect } from 'react';
import InputWithMoreDetails2 from '../../atoms/Inputs/InputWithMoreDetails2';
import DefaultTextEditor from '../../atoms/TextEditors/DefaultTextEditor';
 
interface ICreateArticleProps {
    setArticleContnet: Dispatch<SetStateAction<any>>;
    editData?: any;
}
 
type Dispatch<A> = (value: A) => void;
  
export default function CreateArticle(props: ICreateArticleProps) {
    
    const {
        setArticleContnet,
        editData
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

            {/* {editData && 
                <DefaultTextEditor 
                    onEditorChange={setArticleContnet}
                    value={editData&&editData[0].article_content}
                />
            }

            {!editData && 
                <DefaultTextEditor 
                    onEditorChange={setArticleContnet}
                />
            } */}
            <DefaultTextEditor 
                onEditorChange={setArticleContnet}
                initialValue={editData&&editData[0].article_content as string}
            />

            <div style={{marginBottom:'15px'}}></div>
        </>
    );
}

