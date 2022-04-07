import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rapid Automation',
    Svg: require('@site/static/img/rapid_automation.svg').default,
    description: (
      <>
        Restel was designed from the ground up to be easily installed and
        run your tests in one click and get results in format that you're familiar.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open_source.svg').default,
    description: (
      <>
        Restel lets you focus on your test modeling, and we&apos;ll do the chores. Model your tests 
        in Restel's standard input format and forget the woes of automating.
      </>
    ),
  },
  {
    title: 'Powered by TestNG & Allure',
    Svg: require('@site/static/img/allure_testng.svg').default,
    description: (
      <>
        Restel is powered by proven tools in test automation domain like TestNG &amp; Allure.  
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
