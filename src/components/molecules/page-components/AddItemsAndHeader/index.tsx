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

interface IAddItemsComponentProps {
     
    data:any;
    setAddItemsAndHeaderItems: Dispatch<SetStateAction<any>>;
}

type Component = {
    _id?:number;
    id: number;
    main_text?: string;
    description?: string;
    value:string;
    sortNumber?: number;
    
};  

type Dispatch<A> = (value: A) => void;


export default function AddItemsAndHeader(props: IAddItemsComponentProps) {
    const { 
        data,
        setAddItemsAndHeaderItems
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
            setAddItemsAndHeaderItems(componentItems);
        }else{
            setAddItemsAndHeaderItems(null);
        }
    }, [componentItems]);
    
    useEffect(()=>{
        if(data){
            var __initial_items_to_component: any = [];
            data?.addItemsAndHeader?.items.map((__ck: any, index: number)=>{
                __initial_items_to_component.push({
                    _id:__ck._id,
                    id: randomNumberInRange(1,10000),
                    // id: pageComponents.length, 
                    sortNumber: __ck.sort_number,
                    main_text: __ck.main_text,
                    description: __ck.description,
                });
            });
            __initial_items_to_component.sort((a: any, b: any) => (a.sortNumber > b.sortNumber) ? 1 : -1)
            setComponentItems(__initial_items_to_component);
            // console.log(__initial_components);
        }
        
    }, [data?.addItemsAndHeader?.items]);
    // console.log(data.addItemsAndHeader);

    return (
        <>
            <InsideEditSection> 
                <InputWithMoreDetails2
                    name="main_text_center"
                    labelText="Main text center"
                    placeholder='Some of the testing we offer'
                    className='edit-input'
                    type='text'
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
                                                                        {/* <InputWithMoreDetails
                                                                            labelText={`Text`}
                                                                            placeholder='Functional testing'
                                                                            className='edit-input'
                                                                        /> */}
                                                                        <InputWithMoreDetails
                                                                            name={`items.${index}.main_text`}
                                                                            labelText="Main text center"
                                                                            placeholder='Some of the testing we offer'
                                                                            className='edit-input'
                                                                            type='text'
                                                                            defaultValue={component.main_text}
                                                                            // value={component.value}
                                                                            // handleChange={(e)=>{
                                                                            //     componentItems.map((im, index) => (
                                                                            //         im.value = (e.target as HTMLInputElement).value
                                                                            //     ));
                                                                            //     setComponentItems(componentItems);
                                                                            // }}
                                                                        /> 


                                                                        <label className={'input-label '}  style={{marginBottom:'5px'}}>
                                                                            Description
                                                                        </label>
                                                                        <CustomTextArea 
                                                                            className='text-area-edit'
                                                                            name={`items.${index}.description`}
                                                                            placeholder="Based on the requirements defined we will test against the application to discover any discrepancies in any of the functionalities or components."
                                                                            defaultValue={component.description}

                                                                        />
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
                            <span>Add item</span>
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
  
  