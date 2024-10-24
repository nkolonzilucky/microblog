import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch('http://localhost:3000/api', next: {revalidate: 600});
  const data = await response.json();
  console.log(data)
  return (
    <div>Home</div>
  );
}
