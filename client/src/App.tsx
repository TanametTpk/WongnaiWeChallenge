import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import pages from './pages'

const App: React.FC = () => {

  return (
    <Router>
      <Route exact path="/" component={pages.Home} />
      <Route exact path="/reviews" component={pages.Reviews} />
      <Route exact path="/reviews/:id" component={pages.SingleReview} />
    </Router>
  )

}

export default App;
