// export const dynamic = "force-dynamic";
// "force-static"
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About us",
    description: "We love coding, first and foremost",
  };

export default function AboutPage() {
    return (
        <main>
            <h1>About us</h1>
            <p>We love coding, first and foremost</p>

        </main>
    );
}