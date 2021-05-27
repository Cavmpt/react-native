export default function Navbar(props: INavbarProps): JSX.Element {
  return (
    <div className="navbar">
      <img
        src="./xguard-logo.png"
        alt="Xguard-logo"
        width="50"
        height="50"
      ></img>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        className="navbar__map"
      >
        Map
      </NavLink>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        className="navbar__live-feeds"
      >
        Live Feeds
      </NavLink>
    </div>
  );
}
