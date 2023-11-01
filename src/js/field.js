export default class Field {
    constructor() {
        this.activeCell = null;
        this.nextCell = null;
        this.cells = Array.from(document.getElementsByClassName('cell'));
        this._addClickEvent();
        this.missHad = 0;
        this.hitHad = 0;
        this.timeoutId = null;
    }
       
    startCycle() {
        this.nextCell = Math.floor(Math.random() * 16) + 1;
        while (this.nextCell == this.activeCell) {
            this.nextCell = Math.floor(Math.random() * 16) + 1
        }
        if (this.activeCell !== null) {
            document.getElementById(this.activeCell).className = 'cell';
        }
        document.getElementById(this.nextCell).className = 'selected_cell';
        this.activeCell = this.nextCell
        this.timeoutId = setTimeout(() => this.endCycle(), 1000);
      }
    
    endCycle() {
        this.missHad +=1;
        if (this.missHad < 5) {
           this.startCycle(); 
        } else {
            const gameOverBlock = document.getElementById("game-over-block");
            gameOverBlock.style.display = "block";
        };
        
      }
    
    handleClick(event) {
        if (event.target.className == 'selected_cell') {
            this.hitHad +=1;
            clearTimeout(this.timeoutId);
            this.startCycle();
        };        
    }

    _addClickEvent() {
        for (let index = 0; index < this.cells.length; index++) {
            this.cells[index].addEventListener("click", (event) => this.handleClick(event));    
        }
    }
}
