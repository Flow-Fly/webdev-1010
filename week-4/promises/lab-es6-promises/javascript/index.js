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
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));


// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  })
  .then(() => obtainInstruction("steak", 2))  // no need to use .then here because adding an <li> is synchronous
  .then(step2 => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  })
  .then(() => obtainInstruction("steak", 3))  // no need to use .then here because adding an <li> is synchronous
  .then(step3 => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then(step4 => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then(step5 => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then(step6 => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then(step7 => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  })
  .catch(console.log);


// Iteration 3 using async/await
async function makeBroccoli() {
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;


  // array methods do not await
  // broccoli.forEach(async (step, i) => {
  //   const instruction = await obtainInstruction("broccoli", i);
  //   document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
  // });


  for (let i = 0; i < broccoli.length; i++) {
    const instruction = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
  }
}

makeBroccoli();


// Bonus 2 - Promise all
async function makeBrusselSprouts() {
  const promiseArray = brusselsSprouts.map((step, i) => obtainInstruction("brusselsSprouts", i));
  const instructions = await Promise.all(promiseArray);
  console.log(instructions);

  instructions.forEach(instruction => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;
  });
}

makeBrusselSprouts();