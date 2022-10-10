import React from "react";

function Message({children}) {
    return (
        <div>
            <div class="notification is-danger">
                <button class="delete"></button>
                <strong>{children}</strong>
            </div>
        </div>
    )
}

export default Message