import React from 'react'

function UserGreeting() {
    return <h1>Greetings program!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up!</h1>
}

export default function Greeting(props) {
    if (props.isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}
