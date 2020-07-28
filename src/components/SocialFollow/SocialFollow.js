import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.facebook.com/ipixel.cloud"
        className="facebook social"
        target={"_blank"}
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/ipixel.cloud"
        target={"_blank"}
        className="instagram social"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="3x"
          color="#E1306C"
          style={{ "padding-left": "20px", "padding-right": "20px" }}
        />
      </a>
      <a
        href="https://www.twitter.com/ipixelcloud"
        className="twitter social"
        target={"_blank"}
      >
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
    </div>
  );
}
