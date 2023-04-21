import styles from './Footer.module.css';
import React from 'react';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as AppStore } from "../../Resources/image/appstorebadge.svg";

const Footer = props => {
    const {
        
    } = props;

    return (
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <Logo className={styles.logo} />
          <h2>Nexus</h2>
        </div>
        <div className={styles.sections}>
          <div className={styles.infoLeft}>
            <img
              className={styles.google}
              src={require("../../Resources/image/googleplaybadge.png")}
              alt="Google Play Badge"
            />
            <AppStore className={styles.apple} />
          </div>
        </div>

        <div className={styles.footerInfo} style={{margin:"10px"}}>
         
        </div>
      </div>
    );
  }
  
  export default Footer;