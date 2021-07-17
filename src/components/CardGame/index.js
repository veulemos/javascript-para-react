import "./style.css";

/*function CardGame(icon = "alura-pixel 1", alt = "Logo da Alura") {
    return  `
      <article class="card-game">
        <img src="images/${icon}.png" alt="${alt}">
      </article>
    `;
  }*/
function CardGame() {
    return `
    <article class="card-game">
    <img src= "src/components/images/alura-pixel 1.png" alt="Logo da Alura">
    </article>`;
    
    //return '<article class="card-game"><img src= "src/components/images/alura-pixel 1.png" alt="Logo da Alura"></article>';      
}

export default CardGame;