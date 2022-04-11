import "../styles/normalize.css";
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp



// lls48y6k8g5qp31q59ur8d3ui057ay ID Cliente
// Secret vr67s5o6ggxvju044jamb99lc7godh