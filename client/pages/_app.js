import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
