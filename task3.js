

//task 3


var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];



function findGoodReviews(reviews) {
  
  
  var reviewCostSummary = reviews.reduce(function(summary, review){
    if(summary.hasOwnProperty(review.cost))//if summary has an existing property of a current review cost then true
      {
        summary[review.cost]=summary[review.cost]+1;
      }else{
       summary[review.cost]=1; 
      }
    return summary;
    
  }, {});
  console.log(reviewCostSummary);
  
 
}

console.log(findGoodReviews(reviews));
