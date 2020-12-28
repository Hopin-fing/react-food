import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, PizzaBlock, SortPopup, PizzaLoadingBlock} from "../components/index";

import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }]

const Home = () => {

    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)
    // const { items } =useSelector(({pizzas}) => { #Сократил этот отрезок кода до const items = useSelector(({pizzas}) => pizzas.items)
    //     return {
    //         items: pizzas.items()
    //     }
    // })


    React.useEffect(() => {
            dispatch(fetchPizzas())

    }, []);

    const onSelectCategory = React.useCallback( index => {
        dispatch(setCategory(index))
    }, [])


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
                    activeSort={sortBy}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded
                    ? items.map( obj => <PizzaBlock key={`pizza_${obj.id}`} isLoading={true} {...obj}/>)
                    : [...Array(12)].map((item, index) => <PizzaLoadingBlock key={`loading_${index}`} />)}
            </div>
        </div>
    );
};


export default Home;