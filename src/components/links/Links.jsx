import React from "react";
import "./links.scss";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Links() {
  return (
    <div className="links">
      <ul className="links__list">
        <li className="links__item">
          <a href="https://www.tiktok.com/@mo.lo.ko" className="links__link">
            <AiFillTikTok />
            TikTok
          </a>
        </li>
        <li className="links__item">
          <a
            href="https://www.instagram.com/moloko.bun/"
            className="links__link"
          >
            <FaInstagram />
            Instagram
          </a>
        </li>
        <li className="links__item">
          <a
            href="https://www.youtube.com/@Moloko_bun/shorts"
            className="links__link"
          >
            <FaYoutube />
            YouTube
          </a>
        </li>
        <li className="links__item">
          <a
            href="https://x.com/moloko_bun/with_replies"
            className="links__link"
          >
            <FaTwitter />
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
}
