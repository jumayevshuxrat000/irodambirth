import { motion } from "framer-motion";
import Bunny from "./decor/Bunny.jsx";
import ScrollReveal from "./decor/ScrollReveal.jsx";
import img1 from "./assets/photo/1.png";
import img2 from "./assets/photo/2.png";
import img3 from "./assets/photo/3.png";
import img4 from "./assets/photo/4.png";
import img5 from "./assets/photo/5.png";
import img6 from "./assets/photo/6.png";

const photos = [
  { src: img1, caption: "my Irodam", rotate: -6, big: true },
  { src: img2, caption: "you ♡", rotate: 5 },
  { src: img3, caption: "my Irodam", rotate: -4, heart: true },
  { src: img4, caption: "Pretty princess", rotate: 4 },
  {
    src: img5,
    caption: "always",
    rotate: -3,
  },
  {
    src: img6,
    caption: "forever in my heart",
    rotate: 6,
    heart: true,
  },
];

export default function PhotoWall() {
  return (
    <section
      className="section"
      style={{ background: "#fff6ef", paddingBottom: 120 }}
    >
      <Bunny
        variant="sway"
        hold="heart"
        style={{ top: 6, right: "6%" }}
        size={58}
      />
      <Bunny
        variant="bounce"
        hold="flower"
        style={{ bottom: "8%", left: "4%" }}
        size={58}
      />

      <ScrollReveal>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          our memories ♡
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2
          className="heading-serif"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
        >
          A Wall of Us
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="divider">
          <span className="line" />
          <span>◆</span>
          <span className="line right" />
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "48px 40px",
          maxWidth: 980,
          marginTop: 40,
        }}
      >
        {photos.map((p, i) => (
          <ScrollReveal key={p.caption} delay={0.08 * i} y={40}>
            <motion.div
              className="polaroid"
              style={{
                transform: `rotate(${p.rotate}deg)`,
                width: p.big ? 260 : 220,
              }}
              whileHover={{ rotate: 0, scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <span className="tape" />
              {p.heart && <span className="heart-sticker">♥</span>}
              <img
                src={p.src}
                alt={p.caption}
                style={{ height: p.big ? 300 : 240 }}
                loading="lazy"
              />
              <span className="caption">{p.caption}</span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
