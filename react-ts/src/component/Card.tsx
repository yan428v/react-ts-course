import React from "react";

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactElement | React.ReactNode
}

const Card = ({width, height}: CardProps) => {
    return (
        <div style={{width, height, border: "1px solid gray"}}>
            {children}
        </div>
    );
};

export default Card;