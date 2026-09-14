"use client";

import classes from "../components/Headear.module.css";
import Image from "next/image";
import Link from "next/link";
import searchIcon from "@/Images/sreachicon.svg";
import favouriteIcon from "@/Images/favouriteIcon.png";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Cine<span>Scope</span>
      </Link>
      <nav className={classes.nav}>
        <Link href="/" className={classes.navLink}>
          Home
          {pathname === "/" && (
            <motion.div layoutId="activeNav" className={classes.activeLine} />
          )}
        </Link>

        <Link href="/browse" className={classes.navLink}>
          Browse
          {pathname === "/browse" && (
            <motion.div layoutId="activeNav" className={classes.activeLine} />
          )}
        </Link>
      </nav>

      {/* <div className={classes.searchBox}>
        <input
          type="text"
          placeholder="Search...."
          name="search"
          className={classes.searchInput}
        />
        <button className={classes.searchButton}>
          <Image
            src={searchIcon}
            width={18}
            height={18}
            alt="searchicon"
            loading="eager"
            className={classes.image}
          />
        </button>
      </div> */}
      <div className={classes.icon}>
        <Image
          src={searchIcon}
          width={22}
          height={22}
          alt="searchicon"
          loading="eager"
        />
        <Link href="/favourite">
          <Image src={favouriteIcon} alt="fav" />
        </Link>
      </div>
    </header>
  );
}
