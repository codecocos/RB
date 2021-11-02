import { Link, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";




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
      </ul>
      <hr />
      <Route path='/' component={Home} exact={true} />
      {/* 라우터를 두 번 사용하는 대신, path props를 배열로 설정하면 여러 경로에서 같은 컴포넌트를 보여줄 수 있음. */}
      <Route path={['/about', '/info']} component={About} />

    </div>
  )
}

export default App
