import React, { useReducer } from "react";
import { motion } from "framer-motion";
import NavbarIcon from "./svgs/navbar-icon";
import { cn } from "@/helpers/cn";
import ArrowRight from "./svgs/arrow-right";
const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
];
const variants = {
  closed: {
    position: "fixed",
    right: "50%",
    x: "50%",
    borderRadius: "2rem",
    scale: 1.1,
    top: "8px",
    transition: {
      type: "spring",
      ease: "easeIn",
      borderRadius: {
        type: "tween",
        ease: "easeOut",
      },
    },
  },
  open: {
    scale: 1.24,
    top: "3rem",
    borderRadius: "1.5rem",
    transition: {
      type: "spring",
      ease: "easeIn",
      borderRadius: {
        type: "tween",
        ease: "easeOut",
      },
    },
  },
};
const navVariants = {
  open: {
    borderRadius: "1.30rem",
    paddingBottom: "0.75rem",
    gap: "1rem",
  },
  closed: {
    borderRadius: "1.5rem",
    gap: "0",
  },
};
const ulVariants = {
  open: {
    height: "auto",
    scale: 1.01,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      staggerDirection: 1, // 1 forwards, -1 backwards
      when: "beforeChildren",
    },
  },
  closed: {
    height: 0,
    scale: 1,
  },
};
const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
  closed: {
    y: -2,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const Navbar = () => {
  const [isNavbarOpen, toggleNavbar] = useReducer((state) => !state, false);
  return (
    <motion.nav
      variants={variants}
      initial="closed"
      animate={isNavbarOpen ? "open" : "closed"}
      className="fixed flex-col p-1.5 top-2 bg-gray-950 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
    >
      <motion.div className={cn("p-1.5 bg-gray-900 flex flex-col")} variants={navVariants}>
        <div className="flex gap-7 sm:gap-16 w-full  items-center justify-between">
          <p className="leading-none bg-gray-700  p-0.5 size-9 grid place-content-center rounded-full text-gray-50">
            MK
          </p>
          <p className="leading-none bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text py-2  px-1 sm:p-0.5  whitespace-nowrap font-semibold relative top-1 text-lg sm:text-2xl font-myfont">
            Front-end Dev
          </p>
          <span className={cn("size-9 bg-gray-700  p-0.5", isNavbarOpen ? "rounded-full" : "rounded-full")}>
            <NavbarIcon isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
          </span>
        </div>
        <motion.ul variants={ulVariants} className="self-start">
          {links.map((link) => (
            <motion.li
              className="leading-none flex items-center gap-3 py-2 pl-1 text-xl text-gray-50 font-myfont"
              variants={liVariants}
              key={link}
            >
              <span className="bg-gray-700 border-2 border-dashed border-gray-600 p-0.5 size-7 font-inter grid place-content-center rounded-full">
                <ArrowRight stroke="white" isNavbarOpen={isNavbarOpen} />
              </span>
              <span className="relative top-1">{link.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
