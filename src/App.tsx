import React from 'react'
import { Counter } from './components/counter/Counter'
import { Todo } from './components/todo/Todo'
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
          <Route path="">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App