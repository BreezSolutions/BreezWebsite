import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Breez Labs — Accounts receivable for services businesses where billing isn't simple";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#0A0F1F",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginBottom: 24,
            lineHeight: 1.1,
          }}
        >
          Breez Labs
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#FFFFFFCC",
            lineHeight: 1.4,
            marginBottom: 48,
            maxWidth: 900,
          }}
        >
          We live in your inbox. That&apos;s how we know when you&apos;re owed
          money — before you do.
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 24px",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 20,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            We live in your inbox
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 24px",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 20,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Collect end-to-end
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 24px",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 20,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Free your team
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 18,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          breezlabs.com — Backed by Y Combinator & Google Ventures
        </div>
      </div>
    ),
    { ...size }
  );
}
