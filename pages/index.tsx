import Head from "next/head";
import styles from "../styles/Home.module.css";
import ideas from "../data/ideas";
import { OptionalExtraCard } from "../ExtraCards";
import { IdeaCard } from "../atomic-ui/IdeaCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>S H O P - D C 5 B</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SHOP.DC5B</h1>
        <p className={styles.description}>You must have a head</p>

        <ul className={styles.grid}>
          {ideas.map((idea, index) => [
            <IdeaCard idea={idea} key={idea.price.id} />,
            <OptionalExtraCard mapIndex={index} key="Optional extra cards" />,
          ])}
        </ul>
      </main>
    </div>
  );
}
