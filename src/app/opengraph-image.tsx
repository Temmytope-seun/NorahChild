import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { ogHeroPhoto } from "@/lib/photos";

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
          position: "relative",
          background: "#1c1917",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ogHeroPhoto}
          alt=""
          width={size.width}
          height={size.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.35) 40%, rgba(28,25,23,0.96) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: 64,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#f97316",
                color: "white",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              N
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 36,
                fontWeight: 700,
                color: "white",
              }}
            >
              Norah<span style={{ color: "#f97316" }}>Child</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Giving Every Child a Chance to Learn, Play &amp; Belong
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 24,
                color: "#e7e5e4",
                lineHeight: 1.4,
              }}
            >
              Supporting orphans, displaced children, and children of
              low-income families across Nigeria and Africa.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

export const alt = siteConfig.title;
