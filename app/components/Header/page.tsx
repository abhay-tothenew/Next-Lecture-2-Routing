import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header as React.CSSProperties}>
      <h1>My Website</h1>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>
          Home
        </Link>{" "}
        |{" "}
        <Link href="/Products" style={styles.link}>
          Products
        </Link>{" "}
        |{" "}
        <Link href="/About" style={styles.link}>
          About
        </Link>{" "}
        |{" "}
        <Link href="/ContactUs" style={styles.link}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    padding: "10px",
    background: "#333",
    color: "white",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },
};
