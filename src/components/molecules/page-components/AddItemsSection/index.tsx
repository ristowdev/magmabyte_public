import React, { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import EditButton from '../../../atoms/Buttons/EditButton';
import InputWithMoreDetails from '../../../atoms/Inputs/InputWithMoreDetails';
import CustomTextArea from '../../../atoms/Textareas/CustomeTextArea';
import { InsideEditSection } from './style';

import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import DeleteComponentModal from '../../../organisam/modals/DeleteComponentModal';

interface IAddItemsComponentProps {
     
}

type Component = {
    id: number;
    name?: string;
    description?: string;
    sortNumber?: number;
};  

export default function AddItemsComponet(props: IAddItemsComponentProps) {
    const { 
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
                sortNumber: componentItems.length+1
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
            im.sortNumber = index+1
        ));
		setComponentItems(items)
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
                im.sortNumber = index+1
            ));
            setComponentItems(items_filter);
        }
    },[confirmedDelete]);

    return (
        <>
            <InsideEditSection> 
                <InputWithMoreDetails 
                    labelText="Main text center"
                    placeholder='Some of the testing we offer'
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
                                <div className="componets" 
                                    {...provided.droppableProps} 
                                    ref={provided.innerRef}
                                    style={{width:'99.6%'}}
                                >
                                    {componentItems.map((component, index) => {
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
                                                        >
                                                            <div className='f-ps-da'>
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
                                                                        labelText={`Text`}
                                                                        placeholder='Functional testing'
                                                                        className='edit-input'
                                                                    />
                                                                    <label className={'input-label '}  style={{marginBottom:'5px'}}>
                                                                        Description
                                                                    </label>
                                                                    <CustomTextArea 
                                                                        className='text-area-edit'
                                                                        placeholder="Based on the requirements defined we will test against the application to discover any discrepancies in any of the functionalities or components."
                                                                    />
                                                                </div>
                                                                <button className='d-ds-dsa'
                                                                    
                                                                    onClick={(e)=>{
                                                                        handleDeleteItem(e, component);
                                                                    }}
                                                                >
                                                                    <div className='dd2ld-dd'>
                                                                        <span>X</span>
                                                                    </div>
                                                                </button>  
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
                    <EditButton 
                        className='add-item-section'
                        label='Add item'
                        onClick={(e)=>{addItems(e);}}
                    />
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
  
  