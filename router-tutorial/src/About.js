//쿼리문자열을 객체로 변환할 때 사용하는 라이브러리
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    //문자열 맨 앞의 ?를 생략
    ignoreQueryPrefix: true
  });

  //쿼리의 파싱 결과값은 언제나 문자열
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;

/*
location

-객체에 들어 있는 search 값에서 조회할 수 있음.
-search의 문자열 형태를 객체 형태로 변환해 주어야 함.
-이 때, qs라이브러리를 사용.
-라우트로 사용된 컴포넌트에게 props로 전달 됨.
-웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있음.

형태
{
  'pathname:'/about',
  'search':'?detail=true',
  'hash:''
}

http://localhost:3000/about?datail=true
*/