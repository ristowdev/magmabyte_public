import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import EditButton from '../../../atoms/Buttons/EditButton';
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import CustomTextArea from '../../../atoms/Textareas/CustomeTextArea';
import { InsideEditSection } from './styles';



function Section4Edit() {
    return (
       <InsideEditSection> 
            <InputWithMoreDetails 
                labelText="Main text center"
                placeholder='How our process works'
                className='edit-input'
            />

            <div style={{display:'flex', alignItems:'center', marginBottom:'8px'}} className="label-more-details">
                    <label className={'input-label '}  style={{marginBottom:'5px'}}>
                        Items
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

            <div className='ddf0f-f'>
                <div className='f-ps-da'>
                    <div className='f-ps-da-d'>
                        <InputWithMoreDetails 
                            labelText="Text"
                            placeholder='Analysis'
                            className='edit-input'
                        />
                        <label className={'input-label '}  style={{marginBottom:'5px'}}>
                            Description
                        </label>
                        <CustomTextArea 
                            className='text-area-edit'
                            placeholder="We begin by analysing the project and diving into the requirements as well as the current implementation of the Software development lifecycle on the project."
                        />

                    </div>
                    <div className='d-ds-dsa'>
                        <div className='dd2ld-dd'>
                            <span>X</span>
                        </div>
                    </div>  
                </div>
                <EditButton 
                    className='add-item-section'
                    label='Add item'
                />
            </div>

            

            <EditButton 
                className='edit-button-secton'
                label='Save'
            />

       </InsideEditSection>
    );
  }
  
  export default Section4Edit;
  