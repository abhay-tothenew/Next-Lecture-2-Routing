"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
 const [countdown,setCountDown] = useState(5);
 const router = useRouter();

 useEffect(()=>{

  const timer = setInterval(()=>{
    setCountDown((prev)=> prev-1);
  },1000);

  setTimeout(()=>{
    router.push('/');
  },5000);


  return()=>clearInterval(timer);
 })

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Redirecting to homepage in {countdown} seconds...</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    color: "#333",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
  },
};
