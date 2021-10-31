import React, { Component } from 'react'
import ScrollBox from './ScrollBox'
import ValidationSample from './ValidationSample'

class App extends Component {
  render() {
    return (
      <>
        <ValidationSample />
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
      </>
    )
  }
}

export default App