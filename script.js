`use strict`;

const app = function () {
  const container = document.querySelector(`.container`);
  const ticTac = document.querySelector(`.tic-tac-toe`);
  const boxes = document.querySelectorAll(`.box`);
  const btnReset = document.getElementById(`reset`);
  const player1 = document.getElementById(`player1`);
  const player2 = document.getElementById(`player2`);
  const box1 = document.getElementById(`one`);
  const box2 = document.getElementById(`two`);
  const box3 = document.getElementById(`three`);
  const box4 = document.getElementById(`four`);
  const box5 = document.getElementById(`five`);
  const box6 = document.getElementById(`six`);
  const box7 = document.getElementById(`seven`);
  const box8 = document.getElementById(`eight`);
  const box9 = document.getElementById(`nine`);

  let currentPlayer = true; // player1 is true player2 is false

  const eraseBoard = function () {
    boxes.forEach((box) => {
      box.textContent = ``;
      box.classList.remove(`player1`);
      box.classList.remove(`player2`);
    });
  };

  //
  ///
  /////// EVENT LISTENERS
  boxes.forEach((box) =>
    box.addEventListener(`click`, function () {
      if (currentPlayer && box.textContent === ``) {
        box.classList.add(`player1`);
        box.textContent = `X`;
        currentPlayer = false;
      } else {
        box.classList.add(`player2`);
        box.textContent = `O`;
        currentPlayer = true;
      }

      if (
        box1.classList.contains(`player1`) &&
        box2.classList.contains(`player1`) &&
        box3.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box4.classList.contains(`player1`) &&
        box5.classList.contains(`player1`) &&
        box6.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box7.classList.contains(`player1`) &&
        box8.classList.contains(`player1`) &&
        box9.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box1.classList.contains(`player1`) &&
        box5.classList.contains(`player1`) &&
        box9.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box1.classList.contains(`player1`) &&
        box4.classList.contains(`player1`) &&
        box7.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box2.classList.contains(`player1`) &&
        box5.classList.contains(`player1`) &&
        box8.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box3.classList.contains(`player1`) &&
        box6.classList.contains(`player1`) &&
        box9.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box3.classList.contains(`player1`) &&
        box5.classList.contains(`player1`) &&
        box7.classList.contains(`player1`)
      ) {
        console.log(`winner is player1`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box1.classList.contains(`player2`) &&
        box2.classList.contains(`player2`) &&
        box3.classList.contains(`player2`)
      ) {
        console.log(`winner is player2`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box4.classList.contains(`player2`) &&
        box5.classList.contains(`player2`) &&
        box6.classList.contains(`player2`)
      ) {
        console.log(
          `winner is player2`,
          boxes.forEach((box) => console.log(box))
        );
        setTimeout(eraseBoard, 2000);
      } else if (
        box7.classList.contains(`player2`) &&
        box8.classList.contains(`player2`) &&
        box9.classList.contains(`player2`)
      ) {
        console.log(`winner is player2`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box1.classList.contains(`player2`) &&
        box5.classList.contains(`player2`) &&
        box9.classList.contains(`player2`)
      ) {
        console.log(`winner is player2`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box1.classList.contains(`player2`) &&
        box4.classList.contains(`player2`) &&
        box7.classList.contains(`player2`)
      ) {
        console.log(`winner is player2`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box2.classList.contains(`player2`) &&
        box5.classList.contains(`player2`) &&
        box8.classList.contains(`player2`)
      ) {
        console.log(`winner is player2`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box3.classList.contains(`player2`) &&
        box6.classList.contains(`player2`) &&
        box9.classList.contains(`player2`)
      ) {
        console.log(`winner is player2`);
        setTimeout(eraseBoard, 2000);
      } else if (
        box3.classList.contains(`player2`) &&
        box5.classList.contains(`player2`) &&
        box7.classList.contains(`player2`)
      ) {
        console.log(`winner is player2`);
        setTimeout(eraseBoard, 2000);
      }
    })
  );

  btnReset.addEventListener(`click`, eraseBoard);
};
app();
