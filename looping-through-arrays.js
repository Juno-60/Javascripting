let pets = ['cat', 'dog', 'rat'];
  for (let i = 0; i <= 2; i++ ) {
    pets[i] = pets[i] + 's'
  }
    console.log(pets)

    /* solution:
    
     const pets = ['cat', 'dog', 'rat']
    
//pets.length references the integer representing the length of the array 'pets', which in this case is 2.
//pets.length is better than 2, because in the event you want to add additional items to the array, it is self-referential with no need
//to change the stop condition of the for loop.

    for (let i = 0; i < pets.length; i++) {
      pets[i] = pets[i] + 's'
    }
    
    console.log(pets)

    */