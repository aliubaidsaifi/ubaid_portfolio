import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F4EF",
          color: "#151515",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#151515",
              color: "#F6F4EF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontStyle: "italic",
            }}
          >
            U
          </div>
          <div style={{ fontSize: 34, fontFamily: "sans-serif" }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05 }}>
          <span>Websites, Shopify stores</span>
          <span>
            &amp; automations that <span style={{ color: "#FF5A1F", fontStyle: "italic", marginLeft: 18 }}>sell.</span>
          </span>
        </div>
        <div style={{ fontSize: 28, color: "#5B5852", fontFamily: "sans-serif" }}>
          Next.js · Shopify · n8n · Playwright-tested — working worldwide
        </div>
      </div>
    ),
    size
  );
}
