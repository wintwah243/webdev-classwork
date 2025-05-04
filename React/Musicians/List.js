import React from 'react'

function List(props) {
    //get type from List in App component
    let titleText = `Favorite ${props.type}`;
    if(props.children instanceof Array) {
        titleText += 's';
    }
    return (
        <div>
            <h1>{titleText}</h1>
            {/* this is from li tag under List component */}
            <ul>{props.children}</ul>
        </div>
    )
}

export default List; 