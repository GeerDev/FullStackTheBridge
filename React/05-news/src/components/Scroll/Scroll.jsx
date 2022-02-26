import React, { useEffect, useState } from "react"
import "./Scroll.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Scroll() {
  const [visible, setVisible] = useState(false)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])
  return (
    <div className="scroll-to-top">
      {visible && (
        <div className="scroll-btn animate__animated animate__fadeIn" onClick={scrollTop}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      )}
    </div>
  );
}