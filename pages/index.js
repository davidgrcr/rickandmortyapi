import SvgRickyMorty from "../components/svg/ricky_morty";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      <div className={styles.container}>
        <h1>The Rick and Morty API</h1>
        <p>
          The Rick and Morty API is a REST(ish) and GraphQL API based on the
          television show Rick and Morty. You will have access to about hundreds
          of characters, images, locations and episodes. The Rick and Morty API
          is filled with canonical information as seen on the TV show.
        </p>
        <div className="hero-image">
          <SvgRickyMorty className={styles.hero_image__svg} />
        </div>
      </div>
      <style jsx>{`
          .hero-image {
            position: absolute;
            z-index: -1;
          }
        }
      `}</style>
    </>
  );
}
