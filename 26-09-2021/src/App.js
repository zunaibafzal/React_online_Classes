import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div>    
      <Router>

        <ul>
          <li> <Link to='/' className='nav' > Home </Link> </li>
          <li> <Link to='/about' className='nav' > About </Link> </li>
          <li> <Link to='/Contact' className='nav' > Contact </Link> </li>
        </ul>


        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>



    </div>
  )
}

export default App


//JSX 