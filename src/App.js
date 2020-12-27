import React from 'react'
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Header} from "./components/index";
import {Cart} from "./pages";
import Home from "./pages/Home";
import {fetchPizzas} from "./redux/actions/pizzas";


const App = () => {
    const dispatch = useDispatch()


    React.useEffect(() => {
        dispatch(fetchPizzas())

    }, []);



    return (

        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/"  component={Home}/>
                <Route exact path="/cart" component={Cart}/>
            </div>
        </div>
    );


}


// const mapStateToProps = state => {
//     return {
//         items: state.pizzas.items
//     }
//
// }
//
// const mapDispatchToprops = dispatch => {
//     return {
//         setPizzas: (items) => dispatch(setPizzasAction(items)),
//     }
//
// }

export default  App;

// export default connect(mapStateToProps, mapDispatchToprops)(App);


