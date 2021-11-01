import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('effect');
    console.log(name);
    //컴포넌트가 언마운트 되기 전이나, 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리 함수 반환
    return () => {
      console.log('cleanup');
      console.log(name);
    };
    //빈 배열을 넣어 맨 처음 렌더링 될 때만 실행 되게함.
    //파라미터 제공 시 해당 파라미터가 업데이트 될 때만 실행됨.
  }, [name]);

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 :</b>{name}
        </div>
        <div>
          <b>닉네임 :</b>{nickname}
        </div>
      </div>
    </div>
  )
}

export default Info;
