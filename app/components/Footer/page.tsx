export default function Footer() {
    return (
      <footer style={styles.footer as React.CSSProperties}>
        <p>My Website &copy; 2025</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "100%",
      padding: "10px",
      background: "#333",
      color: "white",
      textAlign: "center",
    },
  };
  