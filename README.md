Insertion Sort

Imagine a cafeteria for sumo, where there is a line and the food isn't quite ready yet. Whenever a new sumo enters the cafeteria, he's going to push as far forward as he can into the line.  In the end, the heaviest sumo eats first, and the lightest eats last.

Iterate through the array once.( you need to check each index only once.)
At each index, check if index is lower than the one before it.
  If so, swap these two numbers.
  Move back a position and repeat.
Once you stop swapping move to the next new index.

Best case scenario, where everything is already in order:  the sort will iterate through the array once without having to swap anything and end. linear complexity.

Worst case:  the array is backward.  the sort will move each item ( position # ) times.  n * ( n - 1 ) * ( n - 2 ) etc. swaps.


Bubble Sort

You ever watch that show where they street race in oklahoma?  They have a list of the top 10 at the moment, and each person on that list gets to challenge the person above them on saturday night.  Over time the fastest makes it to the top, and the slower ones fall off the list.

you iterate through the array, looping until there are no more swaps.
for each iteration,
compare each position with the one before it, and swap if the greater position has a smaller value.

Best case: Array is in order.  Iterates once through the array, moves nothing. ends.

Worst case: List is backwards, everything has to be moved to the other end of the array.  ( n - 1 ) * ( n - 2 ) * ( n - 3 ) etc. swaps.



Quick Sort

Imagine you're herding a group of kids, and you need them to get into a line of ascending height.  You pick a random kid and say 'everyone taller than him to his left, and everyone shorter on right.'  So now you have two groups.  You do this over and over again to each group until until you have your line.

base case: array size < 2
find pivot, position 0.
split array into two, on either side of pivot.
  iterate through array( except 0 ) and push into greater or lesser array.
changing call: return quicksort( small array ) + pivot + quicksort( larger array )

Best Case:  The sort chooses good pivots, located right in the middle of each range.  This minimizes the number of splits needed.

Worst Case:  The sort chooses pivots on the extremes of the range, so the array splits until practically everything is a pivot before recombining.



Merge Sort

Again with the children and the line.  You split them all into groups of 2 with the taller one on the left, shorter one on the right.  Then you have each group combine with another one, and arrange themselves.  Then combine until you have a line.

divide array in half until it ends in pairs or singles
  base case: array.length <= 2
    if so sort
  otherwise divide in half again
    two arrays, each holding half the original.

  then recombine these partial arrays.

  recombine arrays
    compare the two arrays being merged.  look at front of each.
    four cases
      both arrays full.  compare front
      one array is empty.  other concats by default
      other array is empty.  same.
      both arrays empty.  return.

    actual comparison cases
      both positions undefined  do nothing, loop will next cycle
      array1 undefined          concat array2 to sortedArray
      array2 undefined          concat array1 to sortedArray
      array1 greater            push array1 to sortedArray
      array2 greater            push array2 to sortedArray
      array1 == array2          push array1 to sortedArray

  Best Case and Worst Case: Merge Sort splits everything and then recombines it, regardless of how values are placed. So there is only the average case, every case.

Selection Sort

You're holding a deck of cards, but just the spades.  You look through the stack for the ace, and put it on top.  Then you find the 2, and put it behind the ace.  Then the 3, and so on until you have them in order.

repeat array.length - 1 times.
iterate through array, start one position higher each time
grab the first number as current minimum.
compare each position against this minimum
if more minimum, replace current minimum and record position.
when you hit the end of array, swap the first number and current min.

Best Case and Worst Case: The sorting algorithm needs to find the absolute minimum value, then the second lowest, etc all the way to the end.  No matter what the order is, this is going to happen.



Stretch Goal - Create a web app that visually sorts a randomized group via with DOM manipulation. Your web app should be able to be used based on user input. Your site doesn't need to be to fancy, here is an example of how it might look Sorting Algorithms Visualized.

Note: Quick Sort and Merge Sort are difficult to visualize in the DOM. Do these last.