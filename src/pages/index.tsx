import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{flexDirection:"column", alignItems:"inherit", paddingBottom: 0}}>
      <div className="container">
        <div className="row" style={{display:"flex", alignItems:"center", }}>
          <div className="col">
            <table style={{textAlign: "left"}}>
              <tbody>
                <tr style={{border: "none"}}>
                  <td style={{border: "none"}}>
                    <h1>The Argon Language</h1>
                    <p style={{fontSize:"1.2rem"}}>
                      The Argon language is a work-in-progress interpreted multi-paradigm programming language. 
                      Its syntax is influenced by many modern languages and aims to be <strong>elegant</strong>, <strong>clean</strong> and <strong>simple to use</strong>.
                    </p>
                    <button style={{ backgroundColor: "#d08770"}} className="button button--primary">Latest release »</button>
                    &nbsp;
                    <button className="button button--secondary">Source code</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col col-4">
            <img src="/img/logo.svg" style={{height: "350px", width: "350px"}}/>
          </div>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
      <img src="/img/waves.svg" style={{width: "100%"}}/>
        <div style={{background:"#40495a"}}>
          <code style={{border: "none",   backgroundColor:"transparent"}}>
            import io
          </code>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
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
