const foods = ['pizza','pasta','mac-and-cheese','falafel','hummus','jachnun','sabih'];

const drinks = ['wine','beer','martini','water','wodka','tea','cola'];

/*     5.    Create new array "meals", that will contain objects with properties 
    "food" and "drink" , like [{food: 'pizza',drink: 'wine'},
                               {food: 'pasta',drink: 'beer'},
                               {food: 'mac-and-cheese', drink: 'martini'},
                                ...]
    HINT at the end of the file. */
    const meals = foods.map((e,i) => {
        return {
            food:e,
            drink:drinks[i]
        }
    })
    console.log(meals);
