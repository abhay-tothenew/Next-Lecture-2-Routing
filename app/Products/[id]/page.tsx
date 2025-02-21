import { notFound } from "next/navigation";
import products from "../../../public/data/products.json";
export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.title}>{product.name}</h1>
        <p style={styles.text}>
          <strong>Price:</strong> ${product.price}
        </p>
        <p style={styles.text}>
          <strong>Category:</strong> {product.category}
        </p>
        <p style={styles.description}>{product.description}</p>
      </div>
    </div>
  );
}

const styles: { [key: string]:  React.CSSProperties } = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "rgba(246, 99, 175, 0.18)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "8px",
  },
  description: {
    fontSize: "16px",
    color: "#666",
  },
};
