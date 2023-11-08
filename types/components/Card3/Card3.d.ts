import React from 'react';
interface Card3Props {
    title: string;
    placeholder: string;
    confirmButtonText: string;
    cancelButtonText: string;
    handleConfirm: () => void;
    handleCancel: () => void;
    text: string;
    onChangeText: (e: any) => void;
}
declare const Card3: ({ title, placeholder, confirmButtonText, cancelButtonText, handleConfirm, handleCancel, text, onChangeText }: Card3Props) => React.JSX.Element;
export default Card3;
