import React from 'react';
import { Link } from 'react-router-dom'
import '../../Styles/footer.scss'


const Footer = () => (
	<section id="footer" className="bg-info">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>National Transaction Corporation is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p className="h6">&copy; All right Reversed.</p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
);

export default Footer;