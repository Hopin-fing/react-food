import React from 'react'

import {Header} from "./components/index";
import {Cart} from "./pages";
import {Route} from "react-router-dom";
import Home from "./pages/Home";

class App extends React.Component {
    state = {
        categories: {
            activeItem : null,
            items: [
                'Мясные',
                'Вегетарианская',
                'Гриль',
                'Острые',
                'Закрытые'
            ]
        },
        sortPopup: {
            activeItem : 0,
            itemsPopup: [
                'популярности',
                'цене',
                'алфавиту'
            ]
        }

    }

    onSelectItems = (item, place) =>  {
        place.setState( (state) =>({
            activeItem : item
        }))
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Header
                        state={this.state}
                        onSelectItems={this.onSelectItems}
                    />
                    <div className="content">
                        {/*<Route*/}
                        {/*    exact*/}
                        {/*    path="/"*/}
                        {/*    component={Home}*/}
                        {/*/>*/}
                        <Route
                            exact
                            path="/"
                        >
                            <Home state={this.state}
                                  onSelectItems={this.onSelectItems}
                            />

                        </Route>
                        <Route exact path="/cart" component={Cart}/>
                        {/*<Home*/}
                        {/*    state={this.state}*/}
                        {/*    onSelectItems={this.onSelectItems}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        );
    }

}

export default App;


