import React, { Component } from 'react'

class EventPractice extends Component {
  state = {
    message: ''
  }

  //메서드 바인딩은 생성자 메서드에서 하는 것이 정석이지만,
  //바벨의 transform-class-properties 문법을 사용하여
  //화살표 함수 형태로 메서드를 정의하여 간단하게 표현
  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = (e) => {
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