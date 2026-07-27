import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Gulf of America Logistics — Global Project Logistics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/goal-logo.png")
  ).then((buf) => `data:image/png;base64,${buf.toString("base64")}`);

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
          gap: 40,
          background: "linear-gradient(135deg, #100D3F 0%, #06032A 100%)",
        }}
      >
        <img src={logoData} width={420} height={141} alt="" />
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          Worldwide Operations. Global Project Logistics.
        </div>
        <div
          style={{
            width: 160,
            height: 6,
            borderRadius: 999,
            background: "#A30C0C",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
