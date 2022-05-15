import Fruits from "./foods";

function choice(item){
    return item[Math.floor(Math.random() * item.length)];
}

function remove(item, items){
  for (let i=0; i<items.length; i++){
      if(items[i] === item){
          return [...items.slice(0,i), ...items.slice(i +1 ) ]
      }
  }
}

export {choice , remove };