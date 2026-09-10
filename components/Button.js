"use client";

import Link from "next/link";
import classes from "./Button.module.css";
import { useSearchParams } from "next/navigation";
export default function Button({ id, name }) {
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get("genre");

  let url = "/browse";
  if (id) {
    url = `/browse?genre=${id}`;
  }
  const isActive = id ? currentGenre === String(id) : currentGenre === null;

  return (
    <Link
      href={url}
      className={`${classes.genreList} ${isActive ? classes.active : ""}`}
    >
      {name}
    </Link>
  );
}
