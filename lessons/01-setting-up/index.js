// import React from 'react'
// import { render } from 'react-dom'
// import App from './modules/App'
// // render(<App/>, document.getElementById('app'))
//
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
//
// import Home from './modules/Home'
// import About from './modules/About'
// import Repos from './modules/Repos'
// import Repo from './modules/Repo'
//
// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//
//       <IndexRoute component={Home}/>
//
//       <Route path="/repos" component={Repos}>
//         <Route path="/repos/:userName/:repoName" component={Repo}/>
//       </Route>
//       <Route path="/about" component={About}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'))

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
