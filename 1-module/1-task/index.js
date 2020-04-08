/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let num=prompt('Please, enter a number to resolve into a factorial');
      if (num === 0 || num === 1)
        return 1;
      for (var i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;
    }
    

