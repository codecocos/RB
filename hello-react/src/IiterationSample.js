import React from 'react';

const IterationSmaple = () => {
  // return (
  //   <ul>
  //     <li>눈사람</li>
  //     <li>얼음</li>
  //     <li>눈</li>
  //     <li>바람</li>
  //   </ul>
  // )
  const names = ['눈사람', '얼음', '눈', '바람'];
  //const nameList = names.map(name => <li>{name}</li>);
  //key를 지정해주어 변화를 빠르게 감지할 수 있게 함.
  //고유한 값이 엇을 떄만 index 값을 key로 사용한다.
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>
}

export default IterationSmaple;
