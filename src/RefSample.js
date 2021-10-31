/*
#ref사용법 2가지

1. 콜백함수를 통한 ref설정
  - ref를 달고자하는 요소에 ref라는 콜백함수를 props로 전달해준다.
  - 콜백함수는 ref 값을 파라미터로 전달받아, 함수내부에서 ref를 컴포넌트의 멤버변수로 설정.
  - <input ref={(ref)=>{this.input=ref}} />

2. createRef를 통한 ref설정
  - 리액트네 내장되어 있는 createRef 함수를 사용
  - v16.3부터 도입되어 이전 버전에서는 작동하지 않는다.
*/

import React, { Component } from 'react'

class RefSample extends Component {
  //멤버 변수로 담아주기.
  input = React.createRef();

  handleFocus = () => {
    //DOM에 접근하려면 뒷부분에 .current를 넣어준다.
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        {/* ref를 달고자 하는 요소에 달아주기 */}
        <input ref={this.input} />
      </div>
    )
  }
}

export default RefSample