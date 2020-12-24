import React, {Component} from 'react'

import {Header} from "./components/index";
import {Cart} from "./pages";
import {Route} from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
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
                        <Route exact path="/" render={() => <Home
                            state={this.state}
                            onSelectItems={this.onSelectItems}/>}
                        />
                        <Route exact path="/cart" component={Cart}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;


