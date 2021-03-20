import React from "react";

const Footer = () => {
  return (
    <footer className="bigfoot">
      <br />
      <div className="center-content">
        <span className="foot_float_left">
          Made with ❤️ by <b>CouponHub</b>
        </span>
        <br />
        <span className="foot_float_left">
          Not a{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
            width="20px"
            alt="Y Combinator Logo"
          />{" "}
          <b style={{ color: "#f16117" }}>Combinator</b> company
        </span>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
