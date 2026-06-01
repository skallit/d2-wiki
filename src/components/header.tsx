import Image from "next/image";
import diabloIcon from "public/d2icon.png";

export function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Image src={diabloIcon} width={50} height={50} alt="d2 icon"></Image>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="game-classe">
                  Classe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="game-skill">
                  Skill
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="auth">
                  Auth
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
