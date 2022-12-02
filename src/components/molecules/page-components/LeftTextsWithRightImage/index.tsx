import React from 'react';
import { InsideEditSection } from './style';
 
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import { Form, Field } from 'react-final-form'
import InputWithMoreDetails2 from '../../../atoms/Inputs/InputWithMoreDetails2';
  
interface ILeftTextsWithRightImageProps {
    data?: any;
}
   
export default function LeftTextsWithRightImage(props: ILeftTextsWithRightImageProps) {
    const { 
        data
    } = props;

    console.log(data);
    return (
      <InsideEditSection>

            <InputWithMoreDetails2
                name="main_text_left"
                labelText="Main text left"
                placeholder='We can help you achieve the perfect quality for your product'
                className='edit-input'
                type='text'
            />
            <InputWithMoreDetails2 
                name="sub_text_left"
                labelText="Sub text left"
                placeholder='Outsource your testing team'
                className='edit-input'
                type='text'
            />
            <InputWithMoreDetails2 
                labelText="Checkpoint 1"
                placeholder='Scale your team seamlessly'
                className='edit-input'
                id="checkpoint_1"
                name="checkpoint_1"
            />
            <InputWithMoreDetails2
                labelText="Checkpoint 2"
                placeholder='Save up to 50% on employment costs'
                className='edit-input'
                id="checkpoint_2"
                name="checkpoint_2"
            />
            <InputWithMoreDetails2
                labelText="Checkpoint 3"
                placeholder='No additional administrative effort'
                className='edit-input'
                id="checkpoint_3"
                name="checkpoint_3"
            />
            <InputWithMoreDetails2
                labelText="Checkpoint 4"
                placeholder='Save time and money spent on recruiting and interviewing'
                className='edit-input'
                id="checkpoint_4"
                name="checkpoint_4"
            />
            <InputWithMoreDetails2
                labelText="Checkpoint 5"
                placeholder='Flexibility in expertise and seniority'
                className='edit-input'
                id="checkpoint_5"
                name="checkpoint_5"
            />
            <InputWithMoreDetails2
                labelText="Button text"
                placeholder='Schedule a call'
                className='edit-input'
                id="button_text"
                name="button_text"
            /> 
      </InsideEditSection>
              
    );
}
    
    