import React from 'react'
import { Link } from "react-router-dom";


export default function Footer(props) {
    return (
        <>
            <footer className={`bg-${props.mode} pt-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="container d-sm-flex gap-4 ">
                    <div className="col">
                        <h5>Contact Us</h5>
                        <hr style={{borderTop: "1.5px solid"}}/>
                        <p>Address - Akhatwara</p>
                        <p><i className="bi bi-telephone" style={{ color: "#00BFFF" }}></i><Link to="tel:8051344525" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}> +91 8051344525</Link></p>
                        <p><i className="bi bi-whatsapp" style={{ color: "#00BFFF" }}></i><Link to="tel:8051344525" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}> +91 8051344525</Link></p>
                        <p><i className="bi bi-envelope" style={{ color: "#00BFFF" }}></i><Link to="" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}> bestexam.in@gmail.com</Link></p>
                    </div>
                    <div className="col">
                        <h5>Social Media</h5>
                        <hr style={{borderTop: "1.5px solid"}}/>
                        <div>
                            <p><Link to="/"><img src="assets/img/social_media/facebook.png" alt="" width="35" /></Link></p>
                            <p className="ps-3"><Link to="/"><img src="assets/img/social_media/Instagram.png" alt="" width="35" /></Link></p>
                            <p className="ps-3 pt-2"><Link to="/"><img src="assets/img/social_media/youtube.png" alt="" width="35" /></Link></p>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Study Material</h5>
                        <hr style={{borderTop: "1.5px solid"}}/>
                        <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Bihar Board</Link></p>
                        <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>CBSE</Link></p>
                        <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>ICSE</Link></p>
                    </div>
                    <div className="col">
                        <h5>Menu</h5>
                        <hr style={{borderTop: "1.5px solid"}}/>
                        <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Home</Link></p>
                        <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>About Us</Link></p>
                        <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Contact Us</Link></p>
                    </div>
                </div>
                <div className="bg-secondary bg-dark text-white text-center p-2">
                    copyright ExamMit·com All right resverd
                </div>

            </footer>
        </>
    )
}
