import React from 'react';
import Features from './Feature';
import FeaturesSource from './FeatureSource';
import styles from './styles.module.css';

const HomepageFeatures = () => (
  <section className={styles.features}>
    <div className="container">
      <FeaturesSource />
      <Features />
    </div>
  </section>)

export default HomepageFeatures;
