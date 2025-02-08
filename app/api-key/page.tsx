"use client";
import { useEffect, useState } from "react";

export default function ApiKeyPage() {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    setApiKey(key || "API Key not set");
  }, []);

  return (
    <main>
      <h1>API Key</h1>
      <p>{`NEXT_PUBLIC_API_KEY: ${apiKey}`}</p>
    </main>
  );
}
