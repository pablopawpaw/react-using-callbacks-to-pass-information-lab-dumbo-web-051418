import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {selectedColor: '#000'}
    this.onColorChange = this.onColorChange.bind(this)
  }

  genRow = (vals) => (
    vals.map(val => <Cell color={val} selectColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  onColorChange(event) {
    this.setState({selectedColor: event.target.dataset.color})
    console.log(this.state.selectedColor);
  }

  render() {
    return (
      <div id="app">
        <ColorSelector selectColor={this.onColorChange} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
