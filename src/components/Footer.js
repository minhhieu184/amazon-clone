import React from 'react';

import { useHistory } from 'react-router-dom';

const Footer = () => {
    const history = useHistory()
    return (
        <>
            <div className="bg-[#232f3e] mt-10">
                <div>
                    <div className="grid grid-cols-12 gap-10 py-12 max-w-5xl mx-auto text-gray-300">
                        <ul className="col-start-1 col-end-4">
                            <h4 className="footer-subtitle">Get to Know Us</h4>
                            <a className="footer-link"href="/">Careers</a>
                            <a className="footer-link"href="/">Blog</a>
                            <a className="footer-link"href="/">About Amazon</a>
                            <a className="footer-link"href="/">Investor Relations</a>
                            <a className="footer-link"href="/">Amazon Devices</a>
                            <a className="footer-link"href="/">Amazon Science</a>
                        </ul>
                        <ul className="col-start-4 col-end-7">
                            <h4 className="footer-subtitle">Make Money with Us</h4>
                            <a className="footer-link"href="/">Sell products on Amazon</a>
                            <a className="footer-link"href="/">Sell on Amazon Business</a>
                            <a className="footer-link"href="/">Sell apps on Amazon</a>
                            <a className="footer-link"href="/">Become an Affiliate</a>
                            <a className="footer-link"href="/">Advertise Your Products</a>
                            <a className="footer-link"href="/">Self-Publish with Us</a>
                            <a className="footer-link"href="/">Host an Amazon Hub</a>
                        </ul>
                        <ul className="col-start-7 col-end-11">
                            <h4 className="footer-subtitle">Amazon Payment Products</h4>
                            <a className="footer-link"href="/">Amazon Business Card</a>
                            <a className="footer-link"href="/">Shop with Points</a>
                            <a className="footer-link"href="/">Reload Your Balance</a>
                            <a className="footer-link"href="/">Amazon Currency Converter</a>
                        </ul>
                        <ul className="col-start-11 col-end-13">
                            <h4 className="footer-subtitle">Let Us Help You</h4>
                            <a className="footer-link"href="/">Amazon and COVID-19</a>
                            <a className="footer-link"href="/">Your Account</a>
                            <a className="footer-link"href="/">Your Orders</a>
                            <a className="footer-link"href="/">Shipping Rates &amp; Policies</a>
                            <a className="footer-link"href="/">Returns &amp; Replacements</a>
                            <a className="footer-link"href="/">Manage Your Content and Devices</a>
                            <a className="footer-link"href="/">Amazon Assistant</a>
                            <a className="footer-link"href="/">Help</a>
                        </ul>
                    </div>
                    <div className="border-t-[1px] border-gray-600">
                        <div className="max-w-5xl mx-auto">
                            <img onClick={() => history.push('/')} className="w-32 mx-auto pt-2 pb-3 cursor-pointer" src="https://m.media-amazon.com/images/G/35/gc/designs/livepreview/amazon_logo_noto_email_v2016_au-main._CB444479176_.png" alt="logo-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#131a22] text-gray-300 py-8">
                <div className="flex justify-center text-xs">
                    <a className="mx-2 hover:underline" href="/">Conditions of Use</a>
                    <a className="mx-2 hover:underline" href="/">Privacy Notice</a>
                    <a className="mx-2 hover:underline" href="/">Interest-Based Ads</a>
                    <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </>
    );
}

export default Footer;
