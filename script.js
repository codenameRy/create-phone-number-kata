function createPhoneNumber(numbers){
    var numberForm = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    numberForm = numberForm.replace('x', numbers[i]);
  }
  
  return numberForm;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");