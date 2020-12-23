import React, {useState} from 'react';

const Categories = ({items, place}) => {

    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = item => {
        setActiveItem(item);
    }



    return (
        <div className="categories">
            <ul>
                <li
                    className={
                        activeItem === null
                        ? "active"
                        : null
                    }
                    onClick={() => onSelectItem(null, place)}
                >Все</li>
                {items &&
                    items.map((item, index) =>
                    <li onClick={() => onSelectItem(index, place)}
                        key={`${item}_${index}`}
                        className={
                            activeItem === index
                            ? "active"
                            : null}
                    >{item}</li>
                )}
            </ul>
        </div>
    )
};

export default Categories;


