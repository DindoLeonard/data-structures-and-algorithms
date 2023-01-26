'use strict';

/*
STACKS

like google history

google
udemy
youtube

why use arrays with stacks?

Arrays allows cache locality because they are right next to each other,

Linked Lists has more memory because you still have to hold pointers, but on the other hand it is more flexible because you can keep adding things to the list

versus

Array where you have static or dynamic array, that as soon as it reaches the limit, it will double-up the memory and create a space for it
*/

/*

Queues
waitlist app

Example:

Matt -- Joy -- Samir -- Pavel

If Matt is the first one to arrive, 
then Matt is the first one to enter

You would never want to build it with array

Ideally good with Linked list because you don't have to unshift index of all subsequent index when you remove the first element

O(n) if array
O(1) if linked list

*/
