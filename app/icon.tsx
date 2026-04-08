import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at top left, rgba(74,222,128,0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(56,189,248,0.22), transparent 36%), linear-gradient(180deg, #0a0f14, #050608)",
          color: "#f7f1e8",
          display: "flex",
          fontFamily: "sans-serif",
          fontSize: 28,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.08em",
          width: "100%",
        }}
      >
        RK
      </div>
    ),
    size,
  );
}
