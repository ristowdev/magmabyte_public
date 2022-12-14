import React, { MouseEvent, ReactElement, SetStateAction, useEffect } from 'react';
import DefaultFileUploader from '../../atoms/FileUploaders/DefaultFileUploader';
import InstantFileUploader from '../../atoms/FileUploaders/InstantFileUploader';
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

            <InstantFileUploader
                id={`items.0.icon`}
                labelText='Thumbnail'
                name={`items.0.icon`}
                __id={0}
                defaultValue={editData&&editData?.longTextArea[0]?.thumbnail || ""}
                // defaultValue={data?.leftTextsRightImage}
            />
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

