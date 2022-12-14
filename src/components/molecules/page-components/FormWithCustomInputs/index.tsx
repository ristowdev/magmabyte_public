import React, { SetStateAction, useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import EditButton from '../../../atoms/Buttons/EditButton';
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import CustomTextArea from '../../../atoms/Textareas/CustomeTextArea';
import { InsideEditSection } from './style';

import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import DeleteComponentModal from '../../../organisam/modals/DeleteComponentModal';
import InputWithMoreDetails2 from '../../../atoms/Inputs/InputWithMoreDetails2';
import InputWithMoreDetails3 from '../../../atoms/Inputs/InputWithMoreDetails3';
import InstantFileUploader from '../../../atoms/FileUploaders/InstantFileUploader';
import CustomeSelectMenu from '../../../atoms/Selects/CustomSelectMenu';
import DefaultCheckBox from '../../../atoms/Checkboxs/DefaultCheckbox';

const fieldTypes: readonly any[] = [
    {
        name:'Textarea',
        key:'textarea'
    },{
        name:'E-mail',
        key:'email'
    },{
        name:'Phone number',
        key:'phonenumber'
    },{
        name:'Text',
        key:'text'
    }
];


interface IFormWithCustomInputsProps {
     
    data:any;
    setListOfItemsInBoxAndCenterText: Dispatch<SetStateAction<any>>;
}

type Component = {
    _id?:number;
    id: number;
    main_text?: string;
    description?: string;
    value:string;
    sortNumber?: number;
    icon?: string;
    link?: string;
    field_label?: string;
    field_required?: boolean;
    field_placeholder?: string;
    field_type?: string;
};  

type Dispatch<A> = (value: A) => void;


export default function FormWithCustomInputs(props: IFormWithCustomInputsProps) {
    const { 
        data,
        setListOfItemsInBoxAndCenterText
    } = props;


    // delete item states
    const [componentForDeleting, setComponentForDeleting] = useState<any>([]);
    const [openDeleteComponentModal, setOpenDeleteComponentModal] = useState(false);
    const [confirmedDelete, setConfirmedDelete] = useState(false);

    const [componentItems, setComponentItems] = useState<Component[]>([]);

    function randomNumberInRange(min:number, max:number) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const addItems = (e: any) =>{
        setComponentItems(prev => [
            ...prev,
            {
                id: randomNumberInRange(1,10000),
                sortNumber: componentItems.length,
                value:'da'
            },
        ]);
    }

    const onDragEnd = (result: DropResult) => {
		const { source, destination } = result
		if (!destination) return

		const items = Array.from(componentItems)
		const [ newOrder ] = items.splice(source.index, 1)
		items.splice(destination.index, 0, newOrder) 
        items.map((im, index) => (
            im.sortNumber = index
        ));
		setComponentItems(items)
        console.log(items);
	}

    const IncreaseSort = (num: number) => {
        return num+1;
    }

    const handleDeleteItem = (e: any, item: any) => {
        e.stopPropagation();
        setOpenDeleteComponentModal(true);
        setComponentForDeleting(item)
    }

    useEffect(()=>{
        if(confirmedDelete!==false){
            setComponentForDeleting(null);
            setConfirmedDelete(false);
            var items_filter = componentItems.filter(c => c.id !== componentForDeleting.id);
            items_filter.map((im, index) => (
                im.sortNumber = index
            ));
            setComponentItems(items_filter);
        }
    },[confirmedDelete]);

    useEffect(()=>{
        if(componentItems.length > 0){ 
            setListOfItemsInBoxAndCenterText(componentItems);
        }else{
            setListOfItemsInBoxAndCenterText(null);
        }
    }, [componentItems]);
    
    useEffect(()=>{
        if(data){
            var __initial_items_to_component: any = [];
            data?.formWithCustomInputs?.items.map((__ck: any, index: number)=>{
                __initial_items_to_component.push({
                    _id:__ck._id,
                    id: randomNumberInRange(1,10000),
                    // id: pageComponents.length, 
                    sortNumber: __ck.sort_number,
                    field_label: __ck.field_label,
                    field_type: __ck.field_type,
                    field_required: __ck.field_required,
                    field_placeholder: __ck.field_placeholder,
                });
            });
            __initial_items_to_component.sort((a: any, b: any) => (a.sortNumber > b.sortNumber) ? 1 : -1)
            setComponentItems(__initial_items_to_component);
            // console.log(__initial_components);
        }
        
    }, [data?.formWithCustomInputs?.items]);
    // console.log(data.addItemsAndHeader);

    return (
        <>
            <InsideEditSection> 
                <InputWithMoreDetails2
                    name="form_title"
                    labelText="Form title"
                    placeholder='Request code review ...'
                    className='edit-input'
                    type='text'
                />

                <InputWithMoreDetails2
                    name="call_to_action"
                    labelText="Call to action button"
                    placeholder='Request now'
                    className='edit-input'
                    type='text'
                />

                <div style={{display:'flex', alignItems:'center', marginBottom:'8px'}} className="label-more-details">
                    <label className={'input-label '}  style={{marginBottom:'5px'}}>
                        Fields
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
                    <DragDropContext 
                        onDragEnd={onDragEnd}
                    >
                        <Droppable 
                            droppableId="componentItems" 
                            direction="vertical"
                            isCombineEnabled={false}
                            ignoreContainerClipping={true}
                        >
                            {(provided) => (
                                <div className="componentItems" 
                                    {...provided.droppableProps} 
                                    ref={provided.innerRef}
                                    style={{width:'99.6%'}}
                                >
                                    {componentItems.map((component, index) => {
                                        const fieldName = `items[${index}]`;

                                        return (
                                            <Draggable
                                                key={component.id.toString()} 
                                                draggableId={component.id.toString()} 
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        // style={{marginBottom:'15px'}}
                                                        
                                                        // style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                                    >   
                                                        <div
                                                            style={{
                                                                paddingBottom:'20px'
                                                            }}
                                                            key={component.id}
                                                        >
                                                            <div className='f-ps-da'
                                                            style={{minHeight:'100px'}}
                                                            key={component.id}
                                                            
                                                            >
                                                                {/* <fieldset name={fieldName} key={fieldName}> */}
                                                                    <div className='f-ps-da-d'>
                                                                        <div
                                                                            style={{
                                                                                marginBottom:'5px',
                                                                                marginTop:'5px'
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontSize:'14px',
                                                                                    color:'#7e7e7e'
                                                                                }}
                                                                            >Position: <b>#{component.sortNumber}</b></span>

                                                                        </div>

                                                                        <InputWithMoreDetails
                                                                            name={`items.${index}.field_label`}
                                                                            labelText="Field label"
                                                                            placeholder='Full name / E-mail / Phone Number ...'
                                                                            className='edit-input'
                                                                            type='text'
                                                                            defaultValue={component.field_label} 
                                                                        />

                                                                        <InputWithMoreDetails
                                                                            name={`items.${index}.field_placeholder`}
                                                                            labelText="Field placeholder"
                                                                            placeholder='Enter your name here.'
                                                                            className='edit-input'
                                                                            type='text'
                                                                            defaultValue={component.field_placeholder} 
                                                                        />

                                                                        <CustomeSelectMenu 
                                                                            labelText='Field type'
                                                                            options={fieldTypes}
                                                                            name={`items.${index}.field_type`}
                                                                            className="ds--dlsl-pll"
                                                                            defaultValue={component.field_type}
                                                                        />

                                                                        <DefaultCheckBox 
                                                                            labelText='Required'
                                                                            name={`items.${index}.field_required`}
                                                                            id={`items.${index}.field_required`}
                                                                            defaultValue={component.field_required}
                                                                        />

                                                                        {/* <InstantFileUploader
                                                                            id={`items.${index}.icon`}
                                                                            labelText='Right main image'
                                                                            name={`items.${index}.icon`}
                                                                            __id={index}
                                                                            defaultValue={component.icon || ""}
                                                                            // defaultValue={data?.leftTextsRightImage}
                                                                        /> */}
                                                                    </div>
                                                                {/* </fieldset> */}
                                                                <a className='d-ds-dsa'
                                                                    
                                                                    onClick={(e)=>{
                                                                        e.preventDefault();
                                                                        handleDeleteItem(e, component);
                                                                    }}
                                                                >
                                                                    <div className='dd2ld-dd'>
                                                                        <span>X</span>
                                                                    </div>
                                                                </a>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    {/* <EditButton 
                        className='add-item-section'
                        label='Add item'
                        onClick={(e)=>{
                            addItems(e);
                        }}
                    /> */}
                    <a className='d-ds-dsa-d-d'
                        onClick={(e)=>{
                            e.preventDefault();
                            addItems(e);

                        }}
                    >
                        <div className='add-item-section-2'>
                            <span>Add field</span>
                        </div>
                    </a>  
                </div> 
            </InsideEditSection>

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
  
  