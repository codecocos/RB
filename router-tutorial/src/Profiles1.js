
import { Link, Route } from 'react-router-dom'
//import WithRouterSample from './WithRouterSample'
import Profile from './Profile'

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to='/profiles/velopert'>velopert</Link>
        </li>
        <li>
          <Link to='/profiles/gildong'>gildong</Link>
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
