import { Counter } from './components/counter/Counter'
import { Todo } from './components/todo/Todo'
import { Landing } from './components/landing/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App