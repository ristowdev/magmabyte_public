import React, { ReactNode } from 'react';

interface IMagmabyteFormProps {
    saveClicked?: boolean;
    handleLeave?: boolean;
    children: ReactNode;
    onSubmit?: (values: any) => void;
    initialValues?: any;
    resetAfterSubmit?: boolean;
}

const MagmabyteForm = ({
    children,
    initialValues = {},
    resetAfterSubmit = false,
    saveClicked = false,
    handleLeave = false,
    onSubmit,
}: IMagmabyteFormProps) => {

    return ( 
        <form
            onSubmit={onSubmit}
            style={{ height: '100%', width:'100%'}}
        >
            {children}
        </form> 
    );
};

export default MagmabyteForm;
