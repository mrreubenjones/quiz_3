// Q1: Write a piece of jQuery code that changes all the links on the home page
// to have a color red if the link's anchor text includes the pattern "eal"
$("a:contains('eal')").css('color', 'red');

// Q2: Write a piece of jQuery code that will fadeOut any link you click on
// without following the link
$('a').click(function(e){
  $(this).fadeOut(1000);
  e.preventDefault();
});

// Q3: Write a Javascript code to do the following: Implement filter function in
// Javascript

var isEven = function (x) { return x % 2 === 0; };

var filter = function(array, fn) {
 var resultArray = [];
 for(i = 0; i < array.length; i++){
   if(fn(array[i])){
     resultArray.push(array[i]);
   }
 }
 return resultArray;
};

console.log(filter([1,2,3,4], isEven));
