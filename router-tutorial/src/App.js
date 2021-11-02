import { Link, Route } from "react-router-dom";
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
      <Route path='/' component={Home} exact={true} />

      {/* 라우터를 두 번 사용하는 대신, path props를 배열로 설정하면 여러 경로에서 같은 컴포넌트를 보여줄 수 있음. */}
      <Route path={['/about', '/info']} component={About} />

      {/* match.params.username 값을 통해 현재 username 값을 조회 할 수 있음. */}
      <Route path={'/profiles'} component={Profiles} />
      <Route path={'/history'} component={HistorySample} />

    </div>
  )
}

export default App
