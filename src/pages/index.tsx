import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  const Logo = require('@site/static/img/logo.svg').default
  const Waves = require('@site/static/img/waves.svg').default

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <table style={{ textAlign: "left" }}>
              <tbody>
                <tr style={{ border: "none" }}>
                  <td style={{ border: "none" }}>
                    <h1>{siteConfig.tagline}</h1>
                    <p style={{ fontSize: "1.1rem" }}>
                      The Argon language is a work-in-progress interpreted multi-paradigm programming language.
                      Its syntax is influenced by many modern languages and aims to be <strong>elegant</strong>, <strong>clean</strong> and <strong>simple to use</strong>.
                    </p>
                    <a href="https://www.github.com/argonlang/argon/releases" target={"_blank"}>
                      <button className={clsx('button', styles.buttonRelease)}>Latest release »</button>
                    </a>
                    &nbsp;
                    <a href="https://www.github.com/argonlang/argon/" target={"_blank"}>
                      <button className={clsx('button', styles.buttonSource)}>Source code</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <Logo style={{ height: "350px", width: "350px" }} />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Waves style={{}} fill={colorMode === "dark" ? "var(--ifm-background-color)" : "currentColor"} />
      </div>
    </header>
  );
}

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
    </Layout>
  );
}
