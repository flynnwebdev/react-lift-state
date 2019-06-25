import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends Component {
    state = {
        temperature: 0,
        scale: 'c'
    }

    toCelsius = (f) => {
        return ((f - 32) * 5 / 9).toFixed(2)
    }

    toFahrenheit = (c) => {
        return ((c * 9 / 5) + 32).toFixed(2)
    }

    handleChange = (e) => {
        if (/^[0-9-.]*$/.test(e.target.value)) {
            this.setState({
                temperature: e.target.value,
                scale: e.target.name
            })
        }
    }

    render() {
        const c = this.state.scale === 'f' ? this.toCelsius(this.state.temperature) : this.state.temperature
        const f = this.state.scale === 'c' ? this.toFahrenheit(this.state.temperature) : this.state.temperature
        return (
            <div>
                <TemperatureInput scale="c" temperature={c} handleChange={this.handleChange} />
                <TemperatureInput scale="f" temperature={f} handleChange={this.handleChange} />
                <BoilingVerdict celsius={c} />
            </div>
        )
    }
}
