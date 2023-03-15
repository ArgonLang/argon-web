import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

type FeatureSourceItem ={
  title: string;
  text: string;
  code: string;
};

const FeatureList: FeatureItem[] = [
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

const FeatureSourceList : FeatureSourceItem[] = [
  {
    title: "Easy to use🌟",
    text: "Argon is inspired by the most used programming languages in the world, which makes it familiar to more experienced programmers and easy to learn if you are a beginner.",
    code : `import "io"

io.print("Hello world!")`
  },
  {
    title: "Beauty💅",
    text: "Code written in Argon is simple to understand and its syntax rewards cleanliness and clarity making it very easy to read.",
    code : `import "enum"
import "io"

let NOBLE_GAS = ["Helium", "Neon", "Argon", "Krypton", "Xenon"]

var group_by_name_length = enum.group_by(len)

NOBLE_GAS
  |> group_by_name_length
  |> io.print`
  },
  {
    title: "Multi paradigm👾",
    text: "Argon supports different programming paradigms, this allows developers to choose the style that best fits the needs of the project.",
    code : 
`struct NameCounter {
  var name
  var counter

  pub func inc_counter(self) {
    self.counter ++
  }
}

var obj_counters = [
  NameCounter@("Alice", 0)
  NameCounter@("Bob", 0)
]

var itm
for itm in obj_counters {
  itm.inc_counter()
}

/* But also */

var obj_counters = [
  ["Alice", 0],
  ["Bob", 0]
]

obj_counters |> map((itm) => {
  itm[1] ++
})
`
  },
  {
    title: "Scalable🚀",
    text: "Thanks to its architecture it is possible to perform a huge amount of tasks simultaneously, your programs can scale and stay lightning fast.",
    code :
`import "io"

func task(id) {
  spawn () => {
    "Hello from task %d" % id |> io.print
  }()
}

for var i = 0; i < 100000; i++ {
  task(i)
}
`
  }
]

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" style={{width: "100%"}}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureSource(a: {idx: number, props: FeatureSourceItem}) {
  var code_left = (
  <div className="row"  style={{display:"flex", alignItems:"center"}}>
    <div className="col">
      <CodeBlock
        language="js"
        showLineNumbers>
          {a.props.code}
      </CodeBlock>
    </div>
    <div className="col col-4">
      <table style={{textAlign: "left"}}>
        <tbody>
          <tr style={{border: "none"}}>
            <td style={{border: "none"}}>
              <h1>{a.props.title}</h1>
              <p style={{fontSize:"1.2rem"}}>
                  {a.props.text}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>);

  var code_right = (
  <div className="row"  style={{display:"flex", alignItems:"center"}}>
    <div className="col">
      <table style={{textAlign: "left"}}>
        <tbody>
          <tr style={{border: "none"}}>
            <td style={{border: "none"}}>
              <h1>{a.props.title}</h1>
              <p style={{fontSize:"1.2rem"}}>
                  {a.props.text}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col col-4">
      <CodeBlock
      language="js"
      showLineNumbers>
        {a.props.code}
      </CodeBlock>
    </div>
  </div>);

  if(a.idx & 1)
    return code_right;

  return code_left;
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureSourceList.map((props, idx) => (
          <FeatureSource key={idx} idx={idx} props={props} />
        ))}

        <div className="row" style={{paddingTop: "40px"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
        ))}
        </div>
      </div>
    </section>
  );
}
