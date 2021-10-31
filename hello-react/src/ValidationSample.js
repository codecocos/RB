import React, { Component } from 'react'
import './ValidationSample.css'

class ValidationSample extends Component {

  state = {
    password: '',
    clicked: false,
    validated: false,
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
  }

  render() {
    return (
      <div>
        <input
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          //버튼이 클릭되었을 때, 검증된 결과가 참이면 성공, 아니면 실패를 보여줘.
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;

//DOM을 꼭 사용해야 하는 상황(state만으로 해결할 수 없는 기능)
//--특정 input에 포커스 주기
//--스크롤 박스 조작하기
//--Canvas 요소에 그림 그리기 등