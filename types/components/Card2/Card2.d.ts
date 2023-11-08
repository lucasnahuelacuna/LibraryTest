import React from 'react';
interface Card2Props {
    name: string;
    date: string;
    title: string;
    description: string;
    imageURL: string;
}
declare const Card2: ({ name, date, title, description, imageURL }: Card2Props) => React.JSX.Element;
export default Card2;
