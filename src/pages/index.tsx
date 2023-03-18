import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Flask from '@site/static/img/flask.svg';
import Logo from '@site/static/img/logo.svg';
import Waves from '@site/static/img/waves.svg';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx("col", styles.heroText, styles.heroContent)}>
            <h1>{siteConfig.tagline}</h1>
            <p>
              The Argon language is a work-in-progress interpreted multi-paradigm programming language.
              Its syntax is influenced by many modern languages and aims to be <strong>elegant</strong>, <strong>clean</strong> and <strong>simple to use</strong>.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://www.github.com/argonlang/argon/releases" target={"_blank"}>
                <button className={clsx('button', styles.buttonRelease)}>Latest release »</button>
              </a>
              <a href="https://www.github.com/argonlang/argon/" target={"_blank"}>
                <button className={clsx('button', styles.buttonSource)}>Source code</button>
              </a>
            </div>
          </div>
          <div className={clsx("col", styles.heroContent)}>
            <Logo />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Waves fill={colorMode === "dark" ? "var(--ifm-background-color)" : "currentColor"} />
      </div>
    </header>
  );
}

const HomePageContribution = () => (
  <div className={styles.contributingContainer}>
    <h1><Flask fill="var(--ifm-color-secondary)" /> Contributing</h1>
    <p>If you find a bug or have an idea, please open an <a href="https://github.com/ArgonLang/Argon/issues">issue on GitHub.</a></p>
  </div>
)

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomePageContribution />
    </Layout>
  );
}
