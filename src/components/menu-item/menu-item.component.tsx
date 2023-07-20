import React from "react";
import "./menu-item.style.scss";
import { useNavigate } from 'react-router-dom';

type AppProps = {
    title: string;
    imgUrl: string;
    size?: string;
    linkUrl: string;
};

const MenuItem = ({ title, imgUrl, size, linkUrl }: AppProps) => {

    const navigate = useNavigate();

    return (<div
        className={`${size} menu-item`} onClick={() => {
            navigate(linkUrl);
        }} >
        <div className="background-image" style={{
            backgroundImage: `url(${imgUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>);
};

export default MenuItem;