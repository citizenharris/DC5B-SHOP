import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import type { Idea } from "../@types";

import styles from "./ideaDetails.module.css";
import { displayPrice } from "../bag/displayPrice";
import { AddToBag } from "../atomic-ui/AddToBag";
import { CustomSections } from "./customSections";
import { TalkAboutIt } from "../atomic-ui/TalkAboutIt";

interface Props {
  idea: Idea;
}

export const IdeaDetails = ({ idea }: Props) => {
  const {
    alt,
    blogPost,
    description,
    id,
    image,
    maxQuantity,
    price,
    subTitle,
    title,
    type,
  } = idea;

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title} - ${subTitle} // DC5B`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.breadcrumbs}>
        <Link href="/">
          <a className={styles.breadcrumb}>Ideas</a>
        </Link>{" "}
        &gt; <span className={styles.currentBreadcrumb}>{title}</span>
      </nav>

      <main className={styles.main}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <div className={styles.heroImage}>
          <Image
            src={image}
            alt={alt}
            width="800px"
            height="800px"
            layout="responsive"
          />
        </div>
        <p className={styles.price}>
          {displayPrice(price.amount)}{" "}
          <span className={styles.priceType}>{type}</span>
        </p>
        <p className={styles.cardDescription}>{description}</p>
        <AddToBag maxQuantity={maxQuantity} price={price} />
        <TalkAboutIt blogPost={blogPost} />
        <CustomSections id={id} />
      </main>
    </div>
  );
};
