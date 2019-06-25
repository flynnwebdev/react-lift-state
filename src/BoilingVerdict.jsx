import React from 'react'

export default function BoilingVerdict(props) {
    return (
        <div>
            <p>The water would {props.celsius < 100 && 'not'} boil.</p>
        </div>
    )
}
