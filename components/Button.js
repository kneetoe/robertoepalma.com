import PropTypes from 'prop-types'
import styles from '../styles/Button.module.scss'

const Button = ({color, text, onClick, link}) => {

  return (
    <a href={link}>
      <button 
      onClick= {onClick}
      
      className={styles.btn}>{text}</button>
    </a>
  )
}


Button.defaultProps = {
    
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button