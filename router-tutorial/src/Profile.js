import React from 'react';
import WithRouterSample from './WithRouterSample';

//프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: '김민준',
    description:
      '리액트를 좋아하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

const Profile = ({ match }) => {
  //파라미터를 받아 올 땐 match안에 들어있는 params 값을 참조한다.
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;