import type { Metadata } from "next"
import localFont from "next/font/local"

import "./global.scss"

// const FontBoilerplate = localFont({
//   src: [{ path: "../fonts/", weight: "400" }],
//   variable: "--font-boilerplate",
// })

export const metadata: Metadata = {
  title: {
    default: "Boilerplate",
    template: `%s | Boilerplate`,
  },
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      // className={`${FontBoilerplate.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
