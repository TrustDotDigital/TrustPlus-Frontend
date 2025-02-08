"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const apiKey1 = process.env.NEXT_PUBLIC_API_KEY;  // This should come from the environment
    console.log("API Key 1 (from env):", apiKey1);  // Log to check

    const apiKey2 = "7f20c8c0852433d7fc8cc180860b717659bdabb8e775c1d9b37e2d930842a082";  // Hardcoded key
    console.log("API Key 2 (hardcoded):", apiKey2);  // Log hardcoded value for comparison

    fetch("https://trustplus-backend-496326718455.us-central1.run.app/", {
      headers: {
        "X-API-Key": apiKey2 || "",  // Temporarily use the hardcoded API key for debugging
      },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <main>
      <h1>Welcome to TrustPlus</h1>
      <p>Backend Response: {message}</p>
    </main>
  );
}
