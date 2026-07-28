import { ImageResponse } from "next/og";

export const alt = "Waha AI Hackathon — Bedar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (hex equivalents of the HSL tokens).
const DEEP = "#022124";
const TEAL = "#407479";
const MINT = "#a9e1d3";
const MINT_SOFT = "#d9f6ef";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: DEEP,
          backgroundImage: `radial-gradient(1000px 500px at 85% -10%, ${TEAL}, transparent 60%)`,
          color: MINT_SOFT,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: MINT,
              color: DEEP,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
            BEDAR
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexWrap: "wrap",
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 900,
          }}
        >
          <span>Waha&nbsp;</span>
          <span style={{ color: MINT }}>AI Hackathon</span>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: MINT_SOFT,
            opacity: 0.85,
          }}
        >
          100% Remote · Prizes up to $13,500 · Bedar Platform
        </div>
      </div>
    ),
    { ...size },
  );
}
