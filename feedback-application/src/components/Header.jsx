
import PropTypes from 'prop-types'

function Header({text,bgcolor}) {
const headerStyles ={backgroundColor: bgcolor}

  return (
    <header style={headerStyles}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

//settingup default props if props passing is not there 
Header.defaultProps = {
    text: 'Feedback UI',
    bgcolor: '#333',
}

// setting props type by importing propTypes and defining here
//Checks for data type
Header.propTypes = {
    text: PropTypes.string,
  
}
export default Header