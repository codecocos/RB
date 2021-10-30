import React, { Component } from 'react'

class EventPractice extends Component {
  state = {
    message: ''
  }

  constructor(props) {
    super(props);
    //함수가 호출될 때 this는 호출부에 따라 결정
    //this를 컴포넌트 자신으로 제대로 가르키기 위해서는
    //메서드를 this와 바인딩하는 작업이 필요
    //만약 바인딩하지 않는 경우라면 this는 undefined를 나타냄.
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;