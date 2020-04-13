/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    for (let scan in obj) {
      return false 
      }
      return true;
      }

