import React from 'react';
interface Card1Props {
    title: string;
    description: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    handleConfirm?: () => void;
    handleCancel?: () => void;
}
declare const Card1: ({ title, description, confirmButtonText, cancelButtonText, handleConfirm, handleCancel }: Card1Props) => React.JSX.Element;
export default Card1;
