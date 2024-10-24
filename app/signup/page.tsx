"use client"
import React from "react";
import styles from "./SignUp.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignupPage() {
    const router = useRouter();
    async function submitData(event:React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
       const formData = new FormData(event.currentTarget)
       const name = String(formData.get('name'))
       const email = String(formData.get('email'))
       const data = {name, email}
       if (name && email) {
        await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
       }
    }
    router.push("/")
    return (
        <div className={styles.page}>
            <form onSubmit={submitData}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Name" name="name" />
                <input type="email" name="email" placeholder="Email address" />
                <button type="submit">Sign up</button>
                <Link className={styles.back} href="/" >
                or cancel
                </Link>
            </form>
        </div>
    )
}