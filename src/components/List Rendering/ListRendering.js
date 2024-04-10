import React from 'react';

const ListRendering = () => {
    const obj=[
        {id: 1, title: "abc"},
        {id: 2, title: "def"},
        {id: 3, title: "ghi"}
    ];

    // mapping objects array into <li>...</li> items
    const listItem=obj.map(objects=>
        <li key={objects.id}>
            {objects.title}
        </li>
    );

    return (
        <div>
            <h1>Items List</h1>
            {listItem}
        </div>
    )
}

export default ListRendering;