import './Footer.css';

function Footer(){

    return (
        <div className="footer-container bg-dark container-fluid">
            <footer className="page-footer row">
                <p className="copyright footer-elem my-auto mx-auto col-sm-3">&copy; Harrison Riley - 2022</p>
                <a href="https://github.com/Rileyh2/Simple-S3-React-Lab" className="github-link my-auto mx-auto footer-elem col-sm-3">Back to GitHub Repo</a>
                <a href="#root" id="last-footer" className="top-link my-auto mx-auto footer-elem col-sm-3">Back to top</a>
            </footer>
        </div>
    );
}

export default Footer;