// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
      .then( (step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2)
          .then( (step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
            obtainInstruction('steak', 3)
              .then( (step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                obtainInstruction('steak', 4)
                  .then( (step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                    obtainInstruction('steak', 5)
                      .then( (step5) => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                        obtainInstruction('steak', 6)
                          .then( (step6) => {
                            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                            obtainInstruction('steak', 7)
                              .then( (step7) => {
                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                                document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
                                document.querySelector('#steakImg').removeAttribute('hidden');
                              })
                          })
                      })
                  })
              })
          })
      })
  })

// Iteration 3 using async/await
async function makeBroccoli() {
    broccoli[0] = await obtainInstruction('broccoli',0);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;
    broccoli[1] = await obtainInstruction('broccoli',1);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`;
    broccoli[2] = await obtainInstruction('broccoli',2);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`;
    broccoli[3] = await obtainInstruction('broccoli',3);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`;
    broccoli[4] = await obtainInstruction('broccoli',4);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`;
    broccoli[5] = await obtainInstruction('broccoli',5);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`;
    broccoli[6] = await obtainInstruction('broccoli',6);
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`;
    document.querySelector('#broccoliImg').removeAttribute('hidden');
}

makeBroccoli()

// Bonus 2 - Promise all

let instructionSteps = []

for(let i=0; i<brusselsSprouts.length ; i++){
  instructionSteps[i] = obtainInstruction('brusselsSprouts', i);
}

Promise.all(instructionSteps).then((values) => {
  values.forEach((element) => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${element}</li>`;  
  });
  document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
});

