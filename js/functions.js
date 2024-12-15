function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function checkIsPalindrome(str){
  if (str.split('').reverse().join('').toLowerCase() === str.toLowerCase()){
    return true;
  }
  return false;
}

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

checkIsPalindrome('топот'); // true
checkIsPalindrome('ДовОд'); // true
checkIsPalindrome('Кекс'); // false
checkIsPalindrome('Лёша на полке клопа нашёл '); // true