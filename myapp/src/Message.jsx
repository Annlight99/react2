import React from "react";

export default function Message({ message }) {
    return (
        <div>
            <span>{message.author}:</span>
            <span>{message.message}</span>
        </div>
    );
}