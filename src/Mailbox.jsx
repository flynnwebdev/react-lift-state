import React from 'react'

export default function Mailbox(props) {
    return (
        <div>
            <h1>Hello!</h1>
            {props.unreadMessages &&
                <h2>You have {props.unreadMessages.length ? props.unreadMessages.length : 'no'} unread messages.</h2>
            }
        </div>
    )
}
