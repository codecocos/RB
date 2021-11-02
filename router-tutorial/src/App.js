import { Link, Route, Switch } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
import Profiles from "./Profiles";


const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/info'>소개2</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필</Link>
        </li>
        <li>
          <Link to='/history'>History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact={true} />

        {/* 라우터를 두 번 사용하는 대신, path props를 배열로 설정하면 여러 경로에서 같은 컴포넌트를 보여줄 수 있음. */}
        <Route path={['/about', '/info']} component={About} />

        {/* match.params.username 값을 통해 현재 username 값을 조회 할 수 있음. */}
        <Route path={'/profiles'} component={Profiles} />
        <Route path={'/history'} component={HistorySample} />
        <Route
          //path를 따로 정의하지 않으면 모드 상황에 렌더링됨.
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  )
}

export default App
