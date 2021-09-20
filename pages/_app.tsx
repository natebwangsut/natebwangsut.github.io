import "../styles/fonts.css"
import "../styles/global.css"
import "../styles/palette.css"

import type { AppProps } from "next/app"

/**
 *
 * @param param0
 * @returns
 */
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
