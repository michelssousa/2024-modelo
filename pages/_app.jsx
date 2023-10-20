import 'tailwindcss/tailwind.css'
import 'animate.css'
import '../globals/style.css'
import {App} from 'konsta/react'
function MyApp({ Component, pageProps }) {
  return (
    <App className='dark scroll-smooth' theme="material" dark safeAreas>
      <Component {...pageProps} />
    </App>
  )
}
export default MyApp
