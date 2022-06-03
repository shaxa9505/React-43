import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import {Route, Switch} from "react-router-dom";


import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Movie from './Pages/Movie';
import NotFound from './Pages/NotFound';




function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/movie:id" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;