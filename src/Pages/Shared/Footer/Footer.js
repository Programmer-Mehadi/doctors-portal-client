import React from 'react';
import footerImg from '../../../assets/images/footer.png';
const Footer = () => {
    return (
        <div className='pb-12 bg-contain' style={{ backgroundImage: `url(${footerImg})` }} >
            <footer className=" p-10 px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" >
                <div>
                    <div className="footer-title">Services</div>
                    <p className="link link-hover">Emergency Checkup</p>
                    <p className="link link-hover">Monthly Checkup</p>
                    <p className="link link-hover">Weekly Checkup</p>
                    <p className="link link-hover">Deep Checkup</p>
                </div>
                <div>
                    <div className="footer-title">ORAL HEALTH</div>
                    <p className="link link-hover">Fluoride Treatment</p>
                    <p className="link link-hover">Cavity Filling</p>
                    <p className="link link-hover">Teath Whitening</p>
                </div>
                <div>
                    <div className="footer-title">OUR ADDRESS</div>
                    <p className="link link-hover">New York - 101010 Hudson</p>
                </div>
            </footer>
            <div className=" text-center">
                <p className='text-center'>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;