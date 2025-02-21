"use client";
import Link from "next/link";
import about from "../../public/data/about.json";

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>{about.about.title}</h1>
        <h3>{about.about.description}</h3>
        <p style={styles.mission}>{about.about.mission}</p>
      </div>

      <div style={styles.teamContainer}>
        <h2>Our Team</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Emp ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Bio</th>
              </tr>
            </thead>
            <tbody>
              {about.about.team.map((member: any, index: number) => (
                <tr key={index}>
                  <td>{member.eid}</td>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>
                    <Link href ={`/About/${member.eid}`}>
                    View Bio
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    textAlign: "center" as const,
    marginTop:'80px'
  },
  header: {
    marginBottom: "30px",
  },
  mission: {
    fontSize: "18px",
    fontWeight: "bold",
    maxWidth: "800px",
    margin: "0 auto",
  },
  teamContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
  },
  tableWrapper: {
    maxHeight: "300px",
    overflowY: "auto" as const,
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
  },
  th: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
  },
  td: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
  },
};

