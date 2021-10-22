import { func } from "prop-types";
import React from "react";
import {Link} from "react-router-dom";
import "../components/Navigation.css"
//a 링크로 할 경우, 페이지 자체가 리로딩됨... 리액트 장점 파괴..

function Navigation(){
    return<div>
        <Link className="home" to="/">Home</Link>
        <Link className="About" to="/about">About</Link>
    </div>
}

export default Navigation