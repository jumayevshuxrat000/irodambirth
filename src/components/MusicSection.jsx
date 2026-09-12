import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bunny from "./decor/Bunny.jsx";
import ScrollReveal from "./decor/ScrollReveal.jsx";

// SHU YERDA MUSIQANI IMPORT QILASAN
import music from "./assets/music/Говори мне.m4a";

const NOTES = ["♪", "♫", "♩", "♬"];

export default function MusicSection() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Play / Pause
  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Music error:", error);
      }
    }
  };

  // Musiqa tugaganda
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Progress bar
  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;

    audio.currentTime = (percent / 100) * audio.duration;
    setProgress(percent);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";

    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);

    return `${min}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <section
      className="section"
      style={{
        minHeight: "80vh",
        justifyContent: "center",
        background:
          "linear-gradient(160deg, #ffe3ec 0%, #fff1e6 60%, #fff6ef 100%)",
      }}
    >
      {/* HAQIQIY AUDIO */}
      <audio ref={audioRef} src={music} preload="metadata" />

      <Bunny variant="sway" style={{ top: "4%", left: "3%" }} size={56} />
      <Bunny variant="sway" style={{ top: "14%", left: "13%" }} size={56} />


      <Bunny
        variant="wave"
        hold="heart"
        style={{ bottom: "5%", right: "3%" }}
        size={64}
        flip
      />

      <AnimatePresence>
        {playing &&
          NOTES.map((n, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: -140,
                x: (i - 1.5) * 22,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                position: "absolute",
                bottom: "38%",
                left: "50%",
                fontSize: "1.6rem",
                color: "#e0699e",
                pointerEvents: "none",
              }}
            >
              {n}
            </motion.span>
          ))}
      </AnimatePresence>

      <ScrollReveal>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          ♫ for you
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2
          className="heading-serif"
          style={{
            textAlign: "center",
            fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
            maxWidth: 560,
          }}
        >
          When I listen to this music,
          <br />I remember you.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div
          className="music-card"
          style={{
            marginTop: 44,
            marginRight: 444,
            marginLeft: 284,
            boxShadow: playing
              ? "0 30px 60px -18px rgba(224,105,158,0.35)"
              : undefined,
          }}
        >
          <div className="label">playing just for you</div>

          <div className="title">Говори мне</div>
          <div className="artist">Miyagi</div>

          {/* PROGRESS */}
          <div
            className="progress-track"
            role="slider"
            onClick={handleProgressClick}
            style={{ cursor: "pointer" }}
          >
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="time-row">
            <span>{formatTime(audioRef.current?.currentTime)}</span>

            <span>{formatTime(audioRef.current?.duration)}</span>
          </div>

          {/* BUTTONS */}
          <div className="controls-row">
            <button
              className="skip-btn"
              aria-label="previous"
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = 0;
                }
              }}
            >
              ⏮
            </button>

            <button
              className="play-btn"
              onClick={togglePlay}
              aria-label={playing ? "pause" : "play"}
            >
              {playing ? "❚❚" : "▶"}
            </button>

            <button
              className="skip-btn"
              aria-label="next"
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime += 10;
                }
              }}
            >
              ⏭
            </button>
          </div>

          {/* EQUALIZER */}
          {playing && (
            <div
              className="equalizer"
              style={{
                justifyContent: "center",
                marginTop: 14,
              }}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          )}

          <p
            style={{
              textAlign: "center",
              marginTop: 16,
              fontFamily: "var(--font-script)",
              color: "var(--pink-ink)",
            }}
          >
            this song is you ♡
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
