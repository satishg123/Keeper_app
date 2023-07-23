import React from "react";

function Footer()
{
    const CurrYear=new Date().getFullYear();
    return <footer><p> Copyright © {CurrYear}</p> </footer>
}

export default Footer;