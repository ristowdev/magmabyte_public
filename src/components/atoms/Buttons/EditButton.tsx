import React, { MouseEvent } from 'react';

import { ChangeEvent, useState } from 'react';
import { Button } from './styles';


interface IEditButtonProps {
    id?: string;
    className?: string;
    label?: string;
    onClick?: (event: MouseEvent) => void;
    loading?: boolean;
    disabled?: boolean;
}

export default function EditButton(props: IEditButtonProps) {
    const {
        id,
        className,
        label,
        onClick,
        loading,
        disabled
    } = props;

    return (
        <Button 
            {...(id ? { id } : {})}
            className={className} 
            disabled={loading || disabled}
            onClick={onClick}
        >
            {loading && '...'}
            {!loading && <>{label}</>}
        </Button>
    );
}