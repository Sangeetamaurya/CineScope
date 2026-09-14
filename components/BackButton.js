"use client";

import { useRouter } from "next/navigation";
export default function BackButton({ classes }) {
  const router = useRouter();
  return (
    <button
      className={classes}
      aria-label="Go back"
      onClick={() => router.back()}
    >
      ←
    </button>
  );
}
