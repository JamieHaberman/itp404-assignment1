
//TASK 2



var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];


function findGoodReviews(reviews) {
  
  var theWordGood=reviews.filter(function(review)
                         {
       return review.title.toUpperCase().indexOf('GOOD') != -1;
                        
                         });
return(theWordGood);

}

console.log(findGoodReviews(reviews));

