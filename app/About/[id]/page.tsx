import { notFound } from "next/navigation";
import aboutData from "../../../public/data/about.json";

interface PageProps{
    params:{id:string}
}
export default function AboutPage({ params }: PageProps) {
  const about = aboutData.about.team.find((p) => p.eid.toString() === params.id);

  if (!about) {
    return notFound();
  }

  return (
    <div style={styles.body}>
      <div>
        <h1>{about.name}</h1> <strong>Emp id </strong>| <strong>{about.eid}</strong>
        <p>
          <strong>Bio:</strong>{about.bio}
        </p>
        <p>
          <strong>Role:</strong> {about.role}
        </p>
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
  
};
