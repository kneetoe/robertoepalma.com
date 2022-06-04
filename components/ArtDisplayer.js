import React from 'react'
import styles from '../styles/ArtD.module.scss'

const ArtDisplayer = () => {
  return (
    <div>
        <ArtDisplayerContainer></ArtDisplayerContainer>
    </div>
  )
}

const data = [ 
    
        
        {strArt: "Interesting Flavor",
        strArtThumb:'/images/art_01.png',
        idArt: 0,
        spotifyLink:'https://open.spotify.com/embed/playlist/2JZq7VAd8WD6gXNfyjqGMS?utm_source=generator',
        artDescription: "This playlist combines a lot of the music I was listening to in 2019 that has catchy beats but is slightly unconventional in many ways. My recommendation? have an open mind when listening to this playlist. This cover is based on airheads candy with the flavor as mystery flavor, as you don't know what exactly you are going to get."
        },

        {strArt: "Pop but in spanish",
        strArtThumb:'/images/art_02.png',
        spotifyLink: 'https://open.spotify.com/embed/playlist/1T8jvLPjBKW6SNTwgdpfC7?utm_source=generator',
        idArt: 1,
        artDescription: "Although the songs in this playlist are not all in Spanish, the spirit of having songs sung in a Latin-based language is there. I wanted to introduce the bright and vibrant colors of Latin America and play on the word pop, allowing Spanish to manifest itself on a soda can."
        },
        {strArt: "indecisive Soup",
        strArtThumb:'/images/art_03.png',
        idArt: 2,
        artDescription: "Have you ever found a song that you like but it doesn't fit in any of your playlists? Are you ever indecisive on what to do with it? This playlist is my solution to that issue. It is a place where I can put songs that I initially liked into one place so that I can listen again later and hear some of the songs that I have recently enjoyed. It's a nice way to keep the music that I like for the time being."
        },

        {strArt: "ham people like this music",
        strArtThumb:'/images/art_04.png',
        spotifyLink:'https://open.spotify.com/embed/playlist/47XT9eDcEey4Qme6VCL9rp?utm_source=generator',
        idArt: 3,
        artDescription: "In this playlist, I pay homage to my college town. I created a playlist of songs that I enjoyed hearing when hanging out with friends. Bellingham is a refreshing name for a city, and I loved my stay and all the new people I had met. I decided to play off the words and include ham in the playlist cover.",
        },

        {
            strArt: "im feelin jazzy",
            strArtThumb:'/images/art_06.png',
            spotifyLink:'',
            idArt: 4,
            artDescription: "I listen to this playlist when it is raining and when I want to put something in the background. I thought most of the album covers of the songs in this playlist were already beautiful and deserved some recognition. I decided that I should make a cover with these album covers into a stylized collage."
        },

        {
            strArt: "ethnic '70s",
            strArtThumb:'/images/art_07.png',
            spotifyLink:'',
            idArt: 5,
            artDescription: "The best way I can describe this playlist is smooth and heartfelt oldies from a different era. Some songs aren't necessarily from the '70s but carry that vibe in the songs. The background to this art is the album cover of 'Another Beginning' by Les McCann. The first song is from this album."
        },
        
         
    
]



class ArtDisplayerContainer extends React.Component {
    state = {artPieces: [], currentIndex: null, currentArt: null};
    constructor(props) {
      super(props);
      this.renderArtPieces = this.renderArtPieces.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    closeModal(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState({ currentIndex: null, currentArt: null });
    }
    async getArtPieces() {
      this.setState({artPieces: data});
    }
    async openModal(e, index, idArt) {
    this.setState({currentIndex: index, currentArt: data[idArt]})
    }
    renderArtPieces(art, index) {
      const {idArt, strArtThumb, strArt} = art;
      return (
        <div className={styles.drink} id={idArt} onClick={(e) => this.openModal(e, index, idArt)}>
          <figure>
            <img src={strArtThumb} />
            <figcaption>
              {strArt}
            </figcaption>
          </figure>
          
        </div>
      )
    }
    componentDidMount() {
      this.getArtPieces()
    }
    render() {
      return (
        <div className={styles.appContainer}>
          <h2>Album Artwork</h2>
          <p></p>
          <main className={styles.artContainer}>
            {this.state.artPieces.map(this.renderArtPieces)}
            <ArtModal closeModal={this.closeModal}
                      recipe={this.state.currentArt}
              />
          </main>
        </div>
      )
    }
  }
  
  class ArtModal extends React.Component {
    render() {
      if (!this.props.recipe) {
        return null;
      }
      const {closeModal, recipe} = this.props;
      const {strArt, strArtThumb, artDescription, spotifyLink, strIngredient3} = recipe;
      return (
        <div>
          <div className={styles.modalOverlay} onClick={closeModal}></div>
          <div className={styles.modal}>
            <a href="#" className={styles.modalClose} onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            <div className={styles.modalBody}>
              <div className={styles.modalImg}>
                <img src={strArtThumb} />
              </div>            
              <div className={styles.modalText}>
                <h2>{strArt}</h2>
                <strong>Description:</strong>
                <p>{artDescription}</p>
                
                <strong>{spotifyLink ? "Listen here:" : ""}</strong>
                <p>{""}</p>
                {spotifyLink != null ? <iframe src={ spotifyLink } width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> : ""}
                
                
              </div>
            </div>
          </div>
        </div>
      )
    }
  }



export default ArtDisplayer