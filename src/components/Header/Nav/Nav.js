import React from 'react';
import {Link} from 'react-router-dom';
import '../header.scss';
class Nav extends React.Component{
    state={
        isMenu: false
    }
    changeClass=()=>{
        this.setState((state)=>{
            return{
                isMenu: !state.isMenu
            }
        })
    }
   render(){
       let showHamburger = this.state.isMenu ? "mobile_nav": "mobile_nav_none";
       let showClose = this.state.isMenu ? "hamburger_close" : "hamburger";
    return(
        <nav className="menu navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Star</Link>
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link active" to="/">Home </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/people/">Peopel</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/planets/">Planets</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/starships/">Starships</Link>
                    </li>
                </ul>
            </div>
            <div onClick={this.changeClass} className={showClose}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={showHamburger} >
                <ul className="">
                    <li className="nav-item active">
                        <Link onClick={this.changeClass} className="nav-link active" to="/">Home </Link>
                    </li>
                    <li>
                        <Link onClick={this.changeClass} className="nav-link" to="/people/">Peopel</Link>
                    </li>
                    <li>
                        <Link onClick={this.changeClass} className="nav-link" to="/planets/">Planets</Link>
                    </li>
                    <li>
                        <Link onClick={this.changeClass} className="nav-link" to="/starships/">Starships</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
   }
}
export default Nav;