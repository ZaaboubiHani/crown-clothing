import React from "react";
import "./menu-item.style.scss";

type AppProps = {
    title: string;
    imgUrl: string;
    size?: string
};

const MenuItem = ({ title, imgUrl, size }: AppProps) => (
    <div
      
        className={`${size} menu-item`}>
            <div className="background-image"   style={{
            backgroundImage: `url(${imgUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;