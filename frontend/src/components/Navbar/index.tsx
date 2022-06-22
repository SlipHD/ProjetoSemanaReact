import './styles.css';
import { ReactComponent as GithubIcon } from "assets/img/github.svg";

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <a href="https://sliphd-dsmovie.netlify.app/">
                        <h1>DSMovie</h1>
                    </a>
                    <a href="https://github.com/soareslipe">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/soareslipe</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>

    );

}

export default Navbar;