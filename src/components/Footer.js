import React from 'react';
import './Header.css';
class Footer extends React.Component {
    render() {
        return (

            <div className='footer'>



                <div className='colz'>

                    <a href='https://github.com/Sagaya-Mary'>
                        <i className="bi bi-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/sagaya-mary-y-6463031b4/'>
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href='https://www.instagram.com/y.mary_31/'>
                        <i className="bi bi-google"></i>
                    </a>
                    <p className='para'>
                        Terms of Use Privacy policy
                    </p>
                    <p className='para'>Copyright &copy; 2020 The Golden Roast.</p>
                </div>
            </div>
        )
    }
}

export default Footer;