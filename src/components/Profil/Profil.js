import React from 'react';
import './Profil.scss';
import '../../styles/main.scss';
import Nav from "../Nav/Nav.js";
import Button from "../Button/Button.js";


const Profil = () => {
  return (
    
    <div className="profil-page-wrapper">
        <Nav />
        <div className="profil-wrapper">
            <div className="my-profil">My profil</div>
            <div className="content-profil">
                <div className="img-and-infos">
                    <div className="img-profil">
                        <img src="https://kultivisise.rs/wp-content/uploads/2017/05/dusko-dugousko.jpg"/>
                        <span>Change image</span>
                    </div>
                    <div className="infos-profil">
                        <div>firstname: <input type="text"/></div>
                        <div>lastname: <input type="text"/></div>
                        <div>role in company: <input type="text"/></div>
                    </div>
                </div>
            </div>
            <div className="footer">
                {/* <div className="footer-button">
                    <div className="button">
                        <button className="button-prifil">Submit changes</button>
                    </div>
                </div> */}
                <Button />
                <div className="go-back">Go back</div>
            </div>
        </div> 
    </div>

  )
}

export default Profil;
