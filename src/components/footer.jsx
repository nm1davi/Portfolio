const Footer = () => {
    const date = new Date();
    const actualYear = date.getFullYear();

    return (
        <div className="footer-container">
            <div className="text-footer-container">
                <h3>
                    © Nicolas Davi - {actualYear}
                </h3>
            </div>
        </div>
    );
}

export default Footer;
