import { useState } from "react";
import { motion } from "framer-motion";
import Bunny from "./decor/Bunny.jsx";
import ScrollReveal from "./decor/ScrollReveal.jsx";
import vedio from "./assets/photo/vidio.mp4";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="section"
      style={{
        minHeight: "85vh",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, #fff6ef 0%, #ffd9e6 55%, #f7a9c9 100%)",
      }}
    >
      <Bunny variant="sleep" style={{ top: "10%", left: "4%" }} size={54} />
      <Bunny
        variant="wave"
        hold="camera"
        style={{ top: "6%", right: "5%" }}
        size={62}
        flip
      />

      <ScrollReveal>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          one last thing
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2
          className="heading-serif"
          style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)" }}
        >
          One more thing for you ♡
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p style={{ color: "var(--text-mid)", marginTop: 6 }}>
          press play when you're ready
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <motion.div
          className="video-frame"
          style={{
            marginTop: 40,
            marginBottom: 40,
            position: "relative",
            justifyContent: "center",
            width: 1160,
            maxWidth: "150vw",
          }}
          whileHover={{ scale: 1.01 }}
        >
          <video src={vedio} controls />
          {!playing && (
            <div className="play-overlay">
              <button
                className="play-circle"
                onClick={() => setPlaying(true)}
                aria-label="play video"
              >
                ▶
              </button>
            </div>
          )}
          <span
            style={{
              position: "absolute",
              bottom: 14,
              left: 18,
              color: "white",
              fontFamily: "var(--font-script)",
              fontSize: "1.1rem",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            a memory for you ♡
          </span>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
