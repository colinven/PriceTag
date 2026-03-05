import "./Header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <a className="navbar" href="/">
            <span className="header__brand-name">PriceTag</span>
          </a>
        </div>

        <nav className="header__nav">
          <a href="/get-a-quote" className="header__nav-cta">Get a Quote</a>
        </nav>
      </div>
    </header>
  );
}