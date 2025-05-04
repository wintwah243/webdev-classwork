/**
 * Returns nothing
 * @param fruit1 - The first input string 
 * @param fruit2 - The second input string 
 * @returns nothing
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
    console.log(salad);
  }
  
  
  /**
   * Returns nothing
   * @param status - The first input string
   * @param repeat - The second input number
   * @returns nothing
   */
  function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status}`);
    }
  }