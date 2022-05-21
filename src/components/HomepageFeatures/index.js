import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Deploy",
    Svg: require("@site/static/img/home/deploy.svg").default,
    description: (
      <>
        Dester makes deploying easy with its intuitive config generator. Head to{" "}
        <a href="#">Dester's config generator</a> and have your Dester instance
        ready in minutes!
      </>
    ),
  },
  {
    title: "Beautiful Frontend",
    Svg: require("@site/static/img/home/ui.svg").default,
    description: (
      <>
        Dester uses React.js to deliver a colorful, user-friendly interface
        jamp-packed with features. Head to the{" "}
        <a href="#">screenshots section</a> to have a preview!
      </>
    ),
  },
  {
    title: "Powerful API",
    Svg: require("@site/static/img/home/api.svg").default,
    description: (
      <>
        DesterLib combines the power of TMDB and Anilist to facilitate its
        operations, providing users with the most feature-packed experience.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
