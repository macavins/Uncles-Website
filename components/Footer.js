import React from "react";

function Footer() {
// const currentYear = new Date().getFullYear();
  return (
    <div className="copyrightFooter">
      <p>Copyright © {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;