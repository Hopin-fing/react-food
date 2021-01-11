import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, PizzaBlock, SortPopup, PizzaLoadingBlock} from "../components/index";

import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart"

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'popular', order: "desc" },
    { name: 'цене', type: 'price', order: "desc" },
    { name: 'алфавиту', type: 'name', order: "asc" }]

const Home = () => {

    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy, order} = useSelector(({filters}) => filters)
    // const { items } =useSelector(({pizzas}) => { #Сократил этот отрезок кода до const items = useSelector(({pizzas}) => pizzas.items)
    //     return {
    //         items: pizzas.items()
    //     }
    // })


    React.useEffect(() => {
            dispatch(fetchPizzas( sortBy, category, order))

    }, [category, sortBy]);

    const onSelectCategory = React.useCallback( index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback( type => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizza = obj => {
        dispatch(addPizzaToCart(obj))
    }


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onClickSort={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded
                    ? items.map( obj => <PizzaBlock
                        onClickAddPizza={handleAddPizza}
                        key={`pizza_${obj.id}`}
                        addedCount = {cartItems[obj.id] && cartItems[obj.id].items.length}
                        {...obj}
                    />)
                    : [...Array(12)].map((item, index) => <PizzaLoadingBlock key={`loading_${index}`} />)}
            </div>
        </div>
    );
};


export default Home;