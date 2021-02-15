function choice(items){
    let itemSelected = items[Math.floor(Math.random() * items.length)]

    return itemSelected
}

function remove(items, item){
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
             items.splice(i, 1)
        }
    };
    
    return items ;
}

export {remove, choice}; 