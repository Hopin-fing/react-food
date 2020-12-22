import React from 'react';

const Categories = ({items}) => {

    const [activeItem, setActiveItem] = React.useState(null)

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
                    onClick={() => onSelectItem(null)}
                >Все</li>
                {items &&
                    items.map((item, index) =>
                    <li onClick={() => onSelectItem(index)}
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


