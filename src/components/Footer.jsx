function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <>
        <p>© {currentYear} CodeCraft Labs. All rights reserved.</p>
        </>
    );
}

export default Footer;
