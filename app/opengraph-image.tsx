import { ImageResponse } from "next/og";
import { resume } from "@/data/resume";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(circle at top left, rgba(74,222,128,0.18), transparent 26%), radial-gradient(circle at 82% 20%, rgba(56,189,248,0.22), transparent 28%), linear-gradient(135deg, #0a0f14, #050608 60%)",
          color: "#f7f1e8",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 999,
            color: "rgba(247,241,232,0.72)",
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.32em",
            padding: "12px 18px",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 880 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.07em",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            {resume.name}
          </div>
          <div
            style={{
              color: "rgba(247,241,232,0.7)",
              fontSize: 32,
              letterSpacing: "0.08em",
              lineHeight: 1.25,
              textTransform: "uppercase",
            }}
          >
            {resume.title}
          </div>
          <div
            style={{
              color: "rgba(247,241,232,0.68)",
              fontSize: 28,
              lineHeight: 1.45,
              maxWidth: 960,
            }}
          >
            Selected work, experience, and contact.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            color: "rgba(247,241,232,0.48)",
            display: "flex",
            fontSize: 20,
            justifyContent: "space-between",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <div>{resume.email}</div>
          <div>github.com/Arcestor</div>
        </div>
      </div>
    ),
    size,
  );
}
