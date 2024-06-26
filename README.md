# areEquallyStrong question

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.

## Solution explanation
This function takes four arguments: yourLeft, yourRight, friendsLeft, and friendsRight. 

It compares the sum of yourLeft and yourRight with the sum of your friend's left and right values. If the two sums are equal, then it checks if yourLeft is equal to either your friend's left or right value. 

If this condition is true, then the function returns true indicating that there is a possibility that the two people are equally strong. If the two sums are not equal, then the function returns false. 

If the two sums are equal, but yourLeft is not equal to either your friend's left or right value, then the function returns false. In this case, the two people are not equally strong.