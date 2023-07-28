import React, { ComponentProps } from "react";
import './collection-preview.style.scss';
import { CollectionItemProps } from "../collection-item/collection-item.component";
import CollectionItem from "../collection-item/collection-item.component";


export interface CollectionPreviewProps {
    id: number;
    title: string;
    routeName: string;
    items: CollectionItemProps[];
}


const CollectionPreview:React.FC<CollectionPreviewProps> = ({id,title,items,routeName}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,index)=>index<4)
                .map(({id,...itemProps})=>(
                <CollectionItem key={id.toString()} id={id} {...itemProps} />))
            }
        </div>
    </div>
)

export default CollectionPreview;