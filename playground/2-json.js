const square = (x) => x * x
console.log(square(3))

// const event = {
//     name : 'Birthday party',
//     printGuestList: () => {
//           console.log('Guest list for '+this.name)  
//     }
// }

// event.printGuestList()
// Guest list for undefined ie arraow function doesnt have reference this
//Arrow functions are suited for property function

// const event = {
//     name : 'Birthday party',
//     guestList: ['Anurag','Andrew','Jen'],
//     printGuestList() {                                   //ES6 short hand notation
//           console.log('Guest list for '+this.name)
//           this.guestList.forEach(function(guest){
//                 console.log(guest + ' is attending '+ this.name)  //OUTPUT :Anurag is attending undefined

//           })
//     }
// }

const event = {
    name : 'Birthday party',
    guestList: ['Anurag','Andrew','Jen'],
    printGuestList() {                                   
          console.log('Guest list for '+this.name)
          this.guestList.forEach((guest) => {                     //Solution: Guest list for Birthday party
                console.log(guest + ' is attending '+ this.name)  

          })
    }
}

event.printGuestList()
