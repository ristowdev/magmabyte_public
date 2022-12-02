import React, { MouseEvent } from 'react';

import { ChangeEvent, useState } from 'react';
import CircularLoader from '../Loaders/CircularLoader';
import { Button } from './styles';


interface ICustomButtonProps {
    id?: string;
    className?: string;
    label?: string;
    onClick?: (event: MouseEvent) => void;
    loading?: boolean;
    disabled?: boolean;
    type?: any;
    name?: string;
}

export default function SuccessButton(props: ICustomButtonProps) {
    const {
        id,
        className,
        label,
        onClick,
        loading,
        disabled,
        type,
        name
    } = props;

    return (
        <Button 
            {...(id ? { id } : {})}
            className={className} 
            disabled={loading || disabled}
            type="submit"
            onClick={onClick} 
            name={name}
        >
            {!loading && <>{label}</>}
            {loading &&  <CircularLoader />}
           
        </Button>
    );
}