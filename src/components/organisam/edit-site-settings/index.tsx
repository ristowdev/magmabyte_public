import React, { SetStateAction, useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai'; 
import { InsideEditSection } from './style';

import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import InputWithMoreDetails2 from '../../atoms/Inputs/InputWithMoreDetails2';
import InputWithMoreDetails from '../../atoms/Inputs/InputWithMoreDetails';
import CustomeSelectMenu from '../../atoms/Selects/CustomSelectMenu';
import DefaultCheckBox from '../../atoms/Checkboxs/DefaultCheckbox';
import DeleteComponentModal from '../modals/DeleteComponentModal';
import { useGetAllPagesQuery } from '../../../slices/menu/menuApiSlices';
 


interface IEditSiteSettingsProps {
    data:any;
    setListOfItemsInBoxAndCenterText: Dispatch<SetStateAction<any>>;
} 



type PageList = {
    name?: string; 
    key?: string; 
};  

type Dispatch<A> = (value: A) => void;

export default function EditSiteSettings(props: IEditSiteSettingsProps) {
    const { 
        data,
        setListOfItemsInBoxAndCenterText
    } = props;

    const { data: _datapro, isError, isLoading, isSuccess, error } = useGetAllPagesQuery();


    const [allPagesList, setAllPageList] = useState<PageList[]>([]);

    // delete item states
    const [componentForDeleting, setComponentForDeleting] = useState<any>([]);
    const [openDeleteComponentModal, setOpenDeleteComponentModal] = useState(false);
    const [confirmedDelete, setConfirmedDelete] = useState(false);
   
    const IncreaseSort = (num: number) => {
        return num+1;
    }

    const handleDeleteItem = (e: any, item: any) => {
        e.stopPropagation();
        setOpenDeleteComponentModal(true);
        setComponentForDeleting(item)
    }
 
  
    // console.log(data.addItemsAndHeader);

    useEffect(()=>{
        if(_datapro){
            // console.log(_datapro);
            let local_arr: any = []; 
            _datapro.map((_page: any)=>{
                local_arr.push({
                    name:_page.page_title,
                    key:_page.page_slug
                });
            });
            setAllPageList(local_arr);
        }
    },[_datapro]);

 
    return (
        <>
            {isLoading ? (<>loading..</>) : allPagesList && (<>

            <InsideEditSection> 
                {/* <InputWithMoreDetails2
                    name="button_title"
                    labelText="Button title"
                    placeholder='Request code review ...'
                    className='edit-input'
                    type='text'
                /> 

            */}

                {/* <InputWithMoreDetails
                    name={`items.0.site_name`}
                    labelText="Site name"
                    placeholder='Magmabyte'
                    className='edit-input'
                    type='text'
                    // defaultValue={component.link_text} 
                />  */}
                
                <CustomeSelectMenu
                    labelText='Default home page'
                    options={allPagesList && allPagesList}
                    name={`items.0.default_home_page`}
                    className="ds--dlsl-pll"
                    defaultValue={data?.default_home_page}
                />
                                                                     
            </InsideEditSection>
            </>)}


            <DeleteComponentModal
                open={openDeleteComponentModal}
                onCloseModal={setOpenDeleteComponentModal}
                headerText='Delete item'
                deleteText='Are you sure you want to delete the item?'
                setConfirmedDelete={setConfirmedDelete}
                componetForDeleting={componentForDeleting}
            />
       </>
    );
  }
  
  