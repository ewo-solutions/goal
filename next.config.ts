import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only used for the trusted, locally-committed connection-lines
    // background SVG exported from Figma — not for any user-supplied source.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
