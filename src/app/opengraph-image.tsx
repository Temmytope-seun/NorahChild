import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, rgba(249,115,22,0.45), transparent 55%), #1c1917",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#f97316",
              color: "white",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              color: "white",
            }}
          >
            Norah<span style={{ color: "#f97316" }}>Child</span>
          </div>
        </div>
        <div
          style={{
            fontSize: 54,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
            maxWidth: 920,
          }}
        >
          Giving Every Child a Chance to Learn, Play &amp; Belong
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#d6d3d1",
            maxWidth: 860,
          }}
        >
          Supporting orphans, displaced children, and children of low-income
          families across Nigeria and Africa.
        </div>
      </div>
    ),
    { ...size }
  );
}

export const alt = siteConfig.title;
