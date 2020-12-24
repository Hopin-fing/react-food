import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Categories, PizzaBlock, SortPopup} from "../components/index";

const Home = ({state, onSelectItems}) => {

    const [pizzas, setPizzas] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
                setPizzas(data.pizzas)
            });

    }, [])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    place={state.categories}
                    items={state.categories.items}
                    onClick ={onSelectItems}
                    activeItem={state.categories.activeItem}
                />
                <SortPopup
                    place={state.sortPopup}
                    items={state.sortPopup.itemsPopup}
                    onClick ={onSelectItems}
                    activeItem={state.sortPopup.activeItem}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map( obj =>
                    <PizzaBlock
                        key={`pizza_${obj.id}`}
                        {...obj}
                    />
                )}
            </div>
        </div>
    );
};


export default Home;