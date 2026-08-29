import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,

  sassOptions: {
    prependData: `
      @use "sass:math" as math;

      @use "@/styles/breakpoints.scss" as *;
      @use "@/styles/functions.scss" as *;
      @use "@/styles/mixins.scss" as *;
    `,
  },
}

export default nextConfig
