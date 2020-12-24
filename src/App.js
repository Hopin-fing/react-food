import React, {Component} from 'react'
import {Header} from "./components/index";
import {Cart} from "./pages";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas)
        })
    }


    render() {
        return (

            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path="/" render={() => <Home items={this.props.items}/>}/>
                    <Route exact path="/cart" component={Cart}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items
    }

}

const mapDispatchToprops = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items)),
    }

}

export default connect(mapStateToProps, mapDispatchToprops)(App);


