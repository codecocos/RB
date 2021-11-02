
import { NavLink, Route } from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };

  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to='/profiles/velopert'>velopert</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to='/profiles/gildong'>gildong</NavLink>
        </li>
      </ul>
      <Route path='/profiles' exact render={() => <div>사용자를 선택해 주세요.</div>} />
      {/* 서브라우터 : 라우트로 사용되고 있는 컴포넌트의 내부에 Route 컴포넌트를 또 사용하면 됨. */}
      <Route path='/profiles/:username' component={Profile} />
      {/* <WithRouterSample /> */}
    </div>
  )
}

export default Profiles
