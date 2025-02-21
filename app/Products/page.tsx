import Link from "next/link";
import products from "../../public/data/products.json";
import { CSSProperties } from "react";

export default function Products() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Products Page</h2>

       <div style = {{
        display:'flex',
       }}>
        {
            products.products.map((product)=>(
                <div key = {product.id} style = {styles.card}>
                <h3>{product.name}</h3>
                <p><b>Price:</b> ${product.price}</p>
                <p><b>Category:</b> {product.category}</p>
                <p style ={styles.desc}>{product.description}</p>
                <Link href ={`/Products/${product.id}`} style ={styles.link}>
                View Details
                </Link>
                </div>
            ))
        }

       </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  content: {
    maxWidth: "900px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  th: {
    backgroundColor: "#f00e3f",
    color: "white",
    padding: "12px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  card:{
    backgroundColor: "rgba(246, 99, 175, 0.18)",
    gap:10,
    margin:'8px',
    width:'250px',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    padding:'5px'
},
  desc: {
    fontSize: "16px",
    color: "#666",
  },
  link:{
    display: "inline-block",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "14px",
}
  
};
