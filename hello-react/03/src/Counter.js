import React, { Component } from 'react'

class Counter extends Component {

  //tate초기값 설정 방법1//////////////
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  //state초기값 설정 방법2/////////////
  state = {
    number: 0,
    fixedNumber: 0
  };
  ///////////////////////////////////

  render() {
    //this.state: state조회
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixedNumber}</h2>

        {/* 버튼이 클릭되었을 때, 호출할 함수 지정 */}
        {/* 
          //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음.
          //비동기적 업데이트 됨 : this.setState를 두번 사용해도 숫자는 1씩 더해진다.
          
          <button onClick={() => {
          this.setState({ number: number + 1 });
          this.setState({ number: this.state.number + 1 });
        }}
        >
          +1
        </button> */}

        {/* ------------------------------------------------------------------------------------------- */}

        {/* this.setState 두 번 사용하면 두 번 반영되도록 : 객체 대신 함수를 인자로 넣는다.
        prevState: 기존상태
        props : 현재 지니고 있는 props 만약 업데이트 중 필요하지 않다면 생략가능*/}

        {/* <button onClick={() => {
          //코드 1
          this.setState(prevState => {
            return {
              number: prevState.number + 1
            };
          });
          //코드 2 : 코드 1과 완전히 똑같은 기능을 함
          //함수에서 바로 객체를 반환(화살표 함수에서 코드블록{}를 생략함.)
          this.setState(prevState => ({
            number: prevState.number + 1
          }));
        }}
        >
          +1
        </button> */}

        {/* ------------------------------------------------------------------------------------------- */}

        {/* this.setState가 끝난 후 특정 작업 실행하기 : 두번째 파라미터로 콜백함수 등록 */}
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default Counter