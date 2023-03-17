import React from 'react';

import styles from './Feature.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

export const featureList: FeatureItem[] = [
    {
        title: 'Run anywhere',
        Svg: require('@site/static/img/anywhere.svg').default,
        description: (
            <>
                The Argon interpreter is written in C++, does not require any dependencies and supports all major operating systems,
                it is possible to have a working environment wherever it is possible to compile C++ code.
            </>
        ),
    },
    {
        title: 'Concurrent',
        Svg: require('@site/static/img/concurrent.svg').default,
        description: (
            <>
                Lightweight concurrency is a key feature of Argon,
                the execution of a Argon program is based on lightweight fibers that can be automatically suspended and resumed as needed.
            </>
        ),
    },
    {
        title: 'I/O Ready',
        Svg: require('@site/static/img/io.svg').default,
        description: (
            <>
                Don't be afraid of I/O bound tasks, Argon automatically handles this situation by suspending the I/O blocked fiber and resuming
                execution only when ready, meanwhile the rest of your program will continue to run without interruption.
            </>
        ),
    },
];


const Feature = ({ title, Svg, description }: FeatureItem) => (
    <div className='col col--4'>
        <div className="text--center">
            <Svg className={styles.svg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
)

const Features = () => <div className="row">
    {featureList.map((props, idx) => <Feature key={idx} {...props} />)}
</div>

export default Features;