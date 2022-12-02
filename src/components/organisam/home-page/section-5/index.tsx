import React from 'react';
import EditButton from '../../../atoms/Buttons/EditButton';
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import CustomeSelectMenu from '../../../atoms/Selects/CustomSelectMenu';
import { InsideEditSection } from './styles';



function Section5Edit() {
    return (
       <InsideEditSection> 
            <CustomeSelectMenu
                labelText='Top 1 blog post'
                className='main-select-menu'
            /> 

            <CustomeSelectMenu
                labelText='Top 2 blog post'
                className='main-select-menu'
            /> 
            
            <CustomeSelectMenu
                labelText='Top 3 blog post'
                className='main-select-menu'
            /> 

            <EditButton 
                className='edit-button-secton'
                label='Save'
            />

       </InsideEditSection>
    );
  }
  
  export default Section5Edit;
  