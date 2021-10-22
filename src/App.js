import React from "react";
import {HashRouter, Route} from "react-router-dom";
//npm install react-router-dom
//BrowserRouter 도 가능 하지만 gitpage 만들기 좀 까다로움.
import Home from "./routes/home"
import About from "./routes/about"
import Navigation from "./components/Navigation"
import Detail from "./routes/Details"

///about 이라는 패스로 가면 about 컴포넌트를 보여줘라 라는 뜻.
//exact => '/'만 해줄경우 /들어간 패스들이 전부 보여지기 때문에.
function App(){
    return <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home}/>
      <Route path='/about' component={About}/>
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
}

export default App;

