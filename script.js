let sqs = document.getElementsByClassName("sqs");
let ale = prompt("Enter the number of mines(Maximum 35)");
let mines = [];
let rand;

for (let i = 0; mines.length < ale; i++) {
  rand = Math.floor(Math.random() * (36 + 0)-0);
  if (!mines.includes(rand)) {
    mines.push(rand);
  }
}

// console.log(mines);

Array.from(sqs).forEach((e, i) => {
  e.addEventListener("click", function () {
    if (mines.includes(i)) {
      this.style.backgroundColor = "red";
      for (let k = 0; k < mines.length; k++) {
        sqs[mines[k]].style.backgroundColor = "red";
        sqs[mines[k]].style.scale = "1.1";
        setTimeout(() => {
          sqs[mines[k]].style.scale = "1";
        }, 500);
    }
    setTimeout(() => {
        alert("Game Over");
        location.reload();
        this.style.pointerEvents = "none"; 
    }, 1000);
    } 
    else {
      this.style.backgroundColor = "green";
    }
  });
});
