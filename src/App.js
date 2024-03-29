import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
//import PrivateRoute from './PrivateRoute'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// const [isTokenFound, setTokenFound] = useState(false);
// getToken(setTokenFound);

// // inside the jsx being returned:
// {isTokenFound &&
// //  Notification permission enabled 👍🏻
// }
// {!isTokenFound &&
// //  Need notification permission ❗️
// }

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Welcome = React.lazy(() => import('./views/pages/welcome/Welcome'))
//const Home = React.lazy(() => import('./views/pages/home/Home'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path="/" element={<Welcome />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App

/*{this.state.isAuth ? <Route path="*" name="Home" element={<DefaultLayout />} /> : null}*
<Route exact path="/" element={<PrivateRoute />}>
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Route>*/
