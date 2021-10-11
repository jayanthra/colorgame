export default class Board {
    constructor(count, boardUI) {
      this.count = count;
      this.boardUI = boardUI;
    }
  
    generateRandomColor() {
      return (
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
      );
    }
  
    generateRandomIndex() {
      const randomI = Math.floor(Math.random() * this.count);
      const randomJ = Math.floor(Math.random() * this.count);
  
      return {
        randomI,
        randomJ,
      };
    }
  
    createBoard() {
      this.boardUI.innerHTML = "";
      const { randomI, randomJ } = this.generateRandomIndex();
      console.log({ randomI }, { randomJ });
      const color = this.generateRandomColor();
      this.boardUI.style.gridTemplateColumns = `repeat(${this.count}, 1fr)`;
      let boxHeight = 600 / this.count;
      this.boardUI.style.gridAutoRows = `${boxHeight}px`;
      for (let i = 0; i < this.count; i++) {
        for (let j = 0; j < this.count; j++) {
          let div = document.createElement("div");
          div.classList.add("box");
          div.style.background = color;
          if (i === randomI && j === randomJ) {
            div.classList.add(`oddone`);
            div.style.opacity = "0.85";
          }
          this.boardUI.appendChild(div);
        }
      }
    }
  
    updateBoard() {
      this.count++;
      this.createBoard();
    }
  }
  