import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default class TemperatureInput extends Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.scale}>Enter temperature in {scaleNames[this.props.scale]}: </label>
                <input type="text" name={this.props.scale} value={this.props.temperature} onChange={this.props.handleChange} />
            </div>
        )
    }
}
