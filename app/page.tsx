"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Next.js + FastAPI Connection Test</h1>
      <p>{message ? message : "Waiting for response..."}</p>
    </div>
  );
}
