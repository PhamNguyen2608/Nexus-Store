import React, { useState } from 'react';
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as GitHubLogo } from "../../Resources/image/githublogo.svg";
import { ReactComponent as Enter } from "../../Resources/image/enter.svg";
import { ReactComponent as Dice } from "../../Resources/image/dice.svg";
import { ReactComponent as LinkedIn } from "../../Resources/image/linkedin.svg";
import { ReactComponent as Game } from "../../Resources/image/game.svg";
import { ReactComponent as NotFound } from "../../Resources/image/notfound.svg";
import { ReactComponent as NotFoundQuery } from "../../Resources/image/notfoundquery.svg";
import { ReactComponent as Git } from "../../Resources/image/git.svg";
import { ReactComponent as Performance } from "../../Resources/image/performance.svg";
import { ReactComponent as Sources } from "../../Resources/image/sources.svg";
import { motion, AnimatePresence, m } from "framer-motion";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';
import AnimatedScroll from '../AnimatedPage/AnimatedScroll';
import games from '../../utils/games';

const Home = props => {
  const {
    shownGames,
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleRemoveFromCart,
    hoverState,
    setHoverState,
    overlap,
    setOverlap,
    openGamePage
  } = props;

  const [browsing, setBrowsing] = useState(false);
  const [landingPage, setLandingPage] = useState(true);

  const navigate = useNavigate();

 const handleHover = (e) => {
   const index = parseInt(e.target.id, 10);

   if (!isNaN(index) && hoverState[index]) {
     let newHoverState = hoverState[index];
     newHoverState.hovered = !newHoverState.hovered;

     setHoverState([
       ...hoverState.slice(0, index),
       newHoverState,
       ...hoverState.slice(index + 1),
     ]);
   }
 };


  const handleBrowse = () => {
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate("/nexus-store/browse");
    }, 1500);
  }

  const handleHome = () => {
    setBrowsing(false);
    navigate('/');
  }

  const handleNavGamePage = () => {
    setHoverState([...hoverState, hoverState[21].hovered = false]);
    navigate("/nexus-store/games/riseofthetombraider");
  }
  
  const handleNavNotFoundPage = () => {
    navigate("/nexus-store/this-page");
  }
  
  const handleNavNotFoundQuery = () => {
    navigate("/nexus-store/games/404");
  }
  
  const handlePlayDice = () => {
    let randomIndex = Math.floor(Math.random() * 32);
    let randomSurname = games[randomIndex].surname;
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate(`/nexus-store/games/${randomSurname}`);
    }, 1500);
  }

  const variants = {
    hidden: { opacity: 1, x: -150 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 150 },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 900 },
    visible: { opacity: 1, y: 0, transition: {  y: { type: "tween", duration: 1.5, bounce: 0.3 }} },
  }

  return (
    <div className={styles.main}>
      {overlap ? (
        <motion.div
          className={styles.overlap}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      ) : null}

      {cartDisplayed ? (
        <Cart
          cartDisplayed={cartDisplayed}
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
          cart={cart}
          cartAmount={cartAmount}
          handleHover={handleHover}
          hoverState={hoverState}
          clearCart={clearCart}
          handleRemoveFromCart={handleRemoveFromCart}
          openGamePage={openGamePage}
        />
      ) : null}
      <div className={styles.home}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src={require("../../Resources/image/lol.mp4")}
            type="video/mp4"
          />
        </video>

        <NavBar
          handleHover={handleHover}
          hoverState={hoverState}
          browsing={browsing}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          landingPage={landingPage}
          cartAmount={cartAmount}
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
        />
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.splash}>
              <h1>Nexus</h1>
              <p className={styles.intro}>
              Địa chỉ hàng đầu để thưởng thức, thảo luận và sáng tạo
                trò chơi.
                <span className={styles.here}>
                  Với gần 30.000 trò chơi từ AAA cho đến indie, thuộc mọi thể
                  loại.
                </span>{" "}
                <span className={styles.careers}>Trải nghiệm ngay.</span>
              </p>
            </div>

            <div className={styles.buttons}>
              <button
                className={`${styles.cta} ${styles.browseBtn}`}
                onClick={handleBrowse}
                aria-label="Browse"
              >
                <Enter className={styles.ctaSVG} />
                Trải nghiệm
              </button>
              <button
                className={styles.cta}
                onClick={handlePlayDice}
                aria-label="Open random game page"
              >
                <Dice className={styles.ctaSVG} />
                Ngẫu nhiên
              </button>

              <a href="https://www.linkedin.com/404/" target="_blank">
                <button
                  className={`${styles.cta} ${styles.lastChild}`}
                  aria-label="Open LinkedIn"
                >
                  <LinkedIn className={`${styles.ctaSVG} ${styles.linkedin}`} />
                  <span>Admin</span>
                </button>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.buttonsRight}>
              <h2>Điều hướng</h2>
              <button
                className={styles.cta}
                onClick={handleNavGamePage}
                aria-label="Open a game page"
              >
                <Game className={styles.ctaSVG} />
                Cửa hàng
              </button>
              <button
                className={styles.cta}
                onClick={handleNavNotFoundPage}
                aria-label="Open 404 page"
              >
                <NotFound className={styles.ctaSVG} />
                Phản hồi với chúng tôi
              </button>
              <button
                className={`${styles.cta} ${styles.lastChild}`}
                onClick={handleNavNotFoundQuery}
                aria-label="open 404 query page"
              >
                <NotFoundQuery className={`${styles.ctaSVG}`} />
                Liên hệ hỗ trợ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;