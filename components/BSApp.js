import React from 'react'
import styles from '../styles/New.module.scss'

const BSApp = () => {
  return (
    <div>
        <BSAp></BSAp>
    </div>
  )
}

const data = [ 
    
        
        {strDrink: "Interesting Flavor",
        strDrinkThumb:'/images/art_01.png',
        idDrink: 0,
        strInstructions: "Hello this is first interesting flavor"
        },

        {strDrink: "Spanish Pop",
        strDrinkThumb:'/images/art_02.png',
        idDrink: 1
        },
        {strDrink: "Indecisive Soup",
        strDrinkThumb:'/images/art_03.png',
        idDrink: 2
        },

        {strDrink: "Bellingham",
        strDrinkThumb:'/images/art_04.png',
        idDrink: 2
        },
    
        
    
]


const data2 = [
    
    {strInstructions: "Hello this is second interesting flavor",},
    {strInstructions: "Hello this is third interesting flavor",}
]

class BSAp extends React.Component {
    state = {ginDrinks: [], currentIndex: null, currentRecipe: null};
    constructor(props) {
      super(props);
      this.renderGinDrinks = this.renderGinDrinks.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    closeModal(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState({ currentIndex: null, currentRecipe: null });
    }
    async getGinDrinks() {
      const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin").then(res => res.json());
      this.setState({ginDrinks: data});
      console.log(res.drinks)
      console.log(data)
    }
    async openModal(e, index, idDrink) {
      const recipeRes = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`).then(res => res.json());
    //   this.setState({currentIndex: index, currentRecipe: recipeRes.drinks[0]})
    console.log(data2[idDrink])
    this.setState({currentIndex: index, currentRecipe: data[idDrink]})
    }
    renderGinDrinks(drink, index) {
      const {idDrink, strDrinkThumb, strDrink} = drink;
      return (
        <div className={styles.drink} id={idDrink} onClick={(e) => this.openModal(e, index, idDrink)}>
          <figure>
            <img src={strDrinkThumb} />
            <figcaption>
              {strDrink}
            </figcaption>
          </figure>
        </div>
      )
    }
    componentDidMount() {
      this.getGinDrinks()
    }
    render() {
      return (
        <div className={styles.appContainer}>
          <h2>Album Artwork</h2>
          <main className={styles.drinkContainer}>
            {this.state.ginDrinks.map(this.renderGinDrinks)}
            <GinModal closeModal={this.closeModal}
                      recipe={this.state.currentRecipe}
              />
          </main>
        </div>
      )
    }
  }
  
  class GinModal extends React.Component {
    render() {
      if (!this.props.recipe) {
        return null;
      }
      const {closeModal, recipe} = this.props;
      const {strDrink, strDrinkThumb, strInstructions, strIngredient2, strIngredient3} = recipe;
      return (
        <div>
          <div className={styles.modalOverlay} onClick={closeModal}></div>
          <div className={styles.modal}>
            <a href="#" className={styles.modalClose} onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            <div className={styles.modalBody}>
              <div className={styles.modalImg}>
                <img src={strDrinkThumb} />
              </div>            
              <div className={styles.modalText}>
                <h2>{strDrink}</h2>
                <strong>Ingredients:</strong>
                <ul>
                  <li>{strIngredient2}</li>
                  <li>{strIngredient3}</li>
                </ul>
                <strong>Instructions:</strong>
                <p>{strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }



export default BSApp