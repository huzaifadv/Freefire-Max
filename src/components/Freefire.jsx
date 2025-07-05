import React, { useState } from 'react'
import freefireLogo from '../assets/images/freefire-logo.jpg';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import menuImg from '../assets/images/menu.png';
import gameVideo from '../assets/video/game-video.mp4';
import closeImg from '../assets/images/popup-close.png';
import popupNavbar from '../assets/images/popup-navbar.png';
import popupFooter from '../assets/images/popup-footer.png';
import popupBg from '../assets/images/popup-box-bg.png'; 
import menuBtn from '../assets/images/menu_on.png';

export default function Freefire() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showFbFormModal, setShowFbFormModal] = useState(false);
    const handleCollectClick = (img) => {
        setSelectedImg(img);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);
    const handleOpenLoginModal = () => {
        setShowModal(false);
        setShowLoginModal(true);
    };
    const handleCloseLoginModal = () => setShowLoginModal(false);
    return (
        <>
            {/* Modal Animation CSS */}
            <style>{`
                @keyframes modalPop {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>
            <div className="main-container" style={{ position: 'relative' }}>
                {/* +++++++++++++++++++++Navbar++++++++++++++++++++ */}
                <nav>
                    <label htmlFor="" className="logo">
                        <img src="" alt="" />
                        <img src={freefireLogo} width="100px" alt="" />
                    </label>
                    <ul>
                        <li>
                            <i className="ri-facebook-line" />
                        </li>
                        <li>
                            <i className="ri-instagram-line" />
                        </li>
                        <li>
                            <i className="ri-youtube-line" />
                        </li>
                        <div className="toggler">
                            <img src={menuImg} alt="" />
                        </div>
                    </ul>
                </nav>
                {/* +++++++++++++++++++++++++++++Video Section +++++++++++++++++++ */}
                <div className="video-section">
                    <video src={gameVideo} autoPlay muted loop />
                </div>
                {/* ++++++++++++++++++++++++++Reward++++++++++++++++++ */}
                <div id="reward-section">
                    <div className="container">
                        <div className="row title-row justify-content-center ">
                            <div className="col-11 d-flex justify-content-center align-items-center reward-heading pt-0 pb-0">
                                <p className="px-2 m-0">claim and get your exclusive rewards now</p>
                            </div>
                        </div>
                        <div className="row px-3 gy-2 mt-2">
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img1} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img1)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img2} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img2)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img3} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img3)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img4} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img4)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img5} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img5)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img6} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img6)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img7} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img7)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img8} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img8)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img9} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img9)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img10} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img10)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img11} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img11)}>Collect</button>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div>
                                    <div className="reward-item">
                                        <img src={img12} className="img-fluid " alt="" />
                                    </div>
                                    <button className="collect-btn" onClick={() => handleCollectClick(img12)}>Collect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {showModal && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000
                    }}>
                        <div
                            style={{
                                background: `url(${popupBg}) center center / cover no-repeat`,
                                width: '100%',
                                maxWidth: 'calc(390px + 4px)',
                                maxHeight: '90vh',
                                boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
                                textAlign: 'center',
                                minWidth: '200px',
                                position: 'relative',
                                animation: 'modalPop 0.35s cubic-bezier(.4,2,.6,1)',
                                padding: 0,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxSizing: 'border-box',
                                marginTop: '-100px'
                            }}
                        >
                            {/* Header Bar */}
                            <div style={{
                                width: '100%',
                                height: '35px',
                                background: `url(${popupNavbar}) center center / cover no-repeat`,
                                padding: 0,
                                borderBottom: '1px solid #444',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <span style={{
                                    color: '#d3a433',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    letterSpacing: '1px',
                                    marginTop: '5px',
                                    textTransform: 'uppercase',
                                }}>Reward Confirmation</span>
                            </div>
                            {/* Close Button */}
                            <button onClick={handleCloseModal} style={{
                                position: 'absolute',
                                top: 3,
                                right: 8,
                                background: 'transparent',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                width: 20,
                                height: 20,
                                zIndex: 2
                            }}>
                                <img src={closeImg} alt="Close" style={{width: 24, height: 24, display: 'block'}} />
                            </button>
                            {/* Modal Content */}
                            <div style={{
                                padding: '5px 0 24px 0',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflowY: 'auto',
                                minHeight: 0
                            }}>
                                <div style={{
                                    color: '#e7debd',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    marginBottom: '14px',
                                    letterSpacing: '0.5px',
                                    textShadow: '0 1px 2px #000',
                                }}>
                                    Are you sure to collect this reward?
                                </div>
                                {selectedImg && (
                                    <div className="reward-item" style={{margin: '0 auto 24px auto', display: 'inline-block'}}>
                                        <img width="90px" height="90px" src={selectedImg} alt="Selected Reward" className="img-fluid" />
                                    </div>
                                )}
                                <button
                                    style={{
                                        width: '90px',
                                        padding: '8px 10px',
                                        fontSize: '1rem',
                                        display: 'block',
                                        margin: '0 auto',
                                        marginBottom: '-23px',
                                        marginTop: '-10px',
                                        background: `url(${menuBtn}) center center / contain no-repeat`,
                                        color: '#c3bea7',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        letterSpacing: '1px',
                                        transition: 'background 0.2s',
                                        position: 'relative',
                                        zIndex: 1,
                                        textShadow: '0 1px 4px #000',
                                    }}
                                    onClick={handleOpenLoginModal}
                                >Collect</button>
                            </div>
                            {/* Popup Footer Image */}
                            <div style={{width: '100%', height: '35px', overflow: 'hidden', padding: 0}}>
                                <img src={popupFooter} alt="Popup Footer" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                            </div>
                        </div>
                    </div>
                )}
                {/* Login Modal */}
                {showLoginModal && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000
                    }}>
                        <div
                            style={{
                                background: `url(${popupBg}) center center / cover no-repeat`,
                                width: '100%',
                                maxWidth: 'calc(390px + 4px)',
                                maxHeight: '90vh',
                                boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
                                textAlign: 'center',
                                minWidth: '200px',
                                position: 'relative',
                                animation: 'modalPop 0.35s cubic-bezier(.4,2,.6,1)',
                                padding: 0,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxSizing: 'border-box',
                                 marginTop: '-150px'
                            }}
                        >
                            {/* Header Bar */}
                            <div style={{
                                width: '100%',
                                height: '35px',
                                background: `url(${popupNavbar}) center center / cover no-repeat`,
                                padding: 0,
                                borderBottom: '1px solid #444',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <span style={{
                                    color: '#d3a433',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    letterSpacing: '1px',
                                    marginTop: '5px',
                                    textTransform: 'uppercase',
                                }}>Account Login</span>
                            </div>
                            {/* Close Button */}
                            <button onClick={handleCloseLoginModal} style={{
                                position: 'absolute',
                                top: 3,
                                right: 8,
                                background: 'transparent',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                width: 20,
                                height: 20,
                                zIndex: 2
                            }}>
                                <img src={closeImg} alt="Close" style={{width: 24, height: 24, display: 'block'}} />
                            </button>
                            {/* Modal Content */}
                            <div style={{
                                padding: '5px 0 24px 0',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflowY: 'auto',
                                minHeight: 0
                            }}>
                                <div style={{
                                    color: '#e7debd',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    marginBottom: '14px',
                                    letterSpacing: '0.5px',
                                    textShadow: '0 1px 2px #000',
                                }}>
                                    Please log in to collect your reward
                                </div>
                                <button
                                    style={{
                                        width: '100%',
                                        maxWidth: '350px',
                                        padding: '0 18px',
                                        height: '35px',
                                        fontSize: '13px',
                                        margin: '0 auto',
                                        background: '#1877f3',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '2px',
                                        cursor: 'pointer',
                                        letterSpacing: '1px',
                                        transition: 'background 0.2s',
                                        position: 'relative',
                                        zIndex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: '20px'
                                    }}
                                    onClick={() => setShowFbFormModal(true)}
                                >
                                    <i className="ri-facebook-fill" style={{
                                        fontSize: '20px',
                                        color: '#fff',
                                        background: '#1877f3',
                                        borderRadius: '3px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        left: '20px',
                                    }}></i>
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        color: '#fff',
                                        letterSpacing: '0.5px',
                                        width: '100%',
                                        textAlign: 'center',
                                    }}>Log in using Facebook account</span>
                                </button>
                            </div>
                            {/* Popup Footer Image */}
                            <div style={{width: '100%', height: '35px', overflow: 'hidden', padding: 0}}>
                                <img src={popupFooter} alt="Popup Footer" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                            </div>
                        </div>
                    </div>
                )}
                {/* Facebook Form Modal (only opens on Facebook button click) */}
                {showFbFormModal && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif'
                    }}>
                        <div
                            style={{
                                background: '#fff',
                                width: '100%',
                                maxWidth: '370px',
                                borderRadius: '10px',
                                boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
                                overflow: 'hidden',
                                position: 'relative',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                boxSizing: 'border-box',
                            }}
                        >
                            {/* Close Button */}
                            <button onClick={() => setShowFbFormModal(false)}
                                style={{
                                    position: 'absolute',
                                    top: 5,
                                    right: 5,
                                    background: 'transparent',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    width: 24,
                                    height: 24,
                                    zIndex: 2,
                                    color: '#fff',
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                aria-label="Close"
                            >
                                ×
                            </button>
                            {/* Facebook Header */}
                            <div style={{
                                background: '#3b5998',
                                padding: '18px 0 10px 0',
                                textAlign: 'center',
                            }}>
                                <span style={{
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '28px',
                                    letterSpacing: '1px',
                                    fontFamily: 'inherit',
                                }}>facebook</span>
                            </div>
                            {/* App Icon */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '10px',
                                marginBottom: '8px',
                            }}>
                                <img src={freefireLogo} alt="App Icon" style={{width: '70px', height: '70px', borderRadius: '10px', border: '2px solid #fff', background: '#fff'}} />
                            </div>
                            {/* Description */}
                            <div style={{
                                color: '#9d9d9d',
                                fontSize: '15px',
                                textAlign: 'center',
                                margin: '0 18px 12px 18px',
                            }}>
                                Log in to your Facebook account to connect to Garena Free Fire.
                            </div>
                            {/* Form */}
                            <form style={{padding: '0 18px 18px 18px'}}>
                                <input type="text" placeholder="Mobile number or email address" style={{
                                    width: '100%',
                                    padding: '10px',
                                    marginBottom: '10px',
                                    border: '1px solid #ccd0d5',
                                    borderRadius: '6px',
                                    fontSize: '15px',
                                    outline: 'none',
                                }} />
                                <input type="password" placeholder="Password" style={{
                                    width: '100%',
                                    padding: '10px',
                                    marginBottom: '10px',
                                    border: '1px solid #ccd0d5',
                                    borderRadius: '6px',
                                    fontSize: '15px',
                                    outline: 'none',
                                }} />
                                <button type="submit" style={{
                                    width: '100%',
                                    background: '#1877f2',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '17px',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '12px 0',
                                    marginBottom: '14px',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit',
                                }}>Log In</button>
                                {/* Facebook-style links below login button */}
                                <div className="fb-links-container">
                                    <a href="#" className="fb-link fb-link-create">Create account</a>
                                    <a href="#" className="fb-link fb-link-notnow">Not now</a>
                                    <a href="#" className="fb-link fb-link-forgot">Forgotten password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            {/* ++++++++++++++++++++++Footer++++++++++++++++++ */}
            <div id="footer">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-10 text-center mt-2 mb-3">
                            <img width="900px" src={freefireLogo} className="img-fluid mx-auto block" alt="" />
                        </div>
                        <div className="col-10 text-center">
                            <p className="m-0">
                                <span className="copyright-icon">©</span>GARENA,inc.All rights
                                reserved
                            </p>
                            <p>
                                Privacy Policy | Terms of Use | Rules of Conduct | Official
                                Community Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
