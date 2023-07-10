import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import React from 'react';

import styles from './FeatureSource.module.css';

type FeatureSourceItem = {
    title: string;
    text: string;
    code: string;
};

const FeatureSourceList: FeatureSourceItem[] = [
    {
        title: "Easy to use 🌟",
        text: "Argon is inspired by the most used programming languages in the world, which makes it familiar to more experienced programmers and easy to learn if you are a beginner.",
        code: `import "io"

io.print("Hello world!")`
    },
    {
        title: "Beauty 💅",
        text: "Code written in Argon is simple to understand and its syntax rewards cleanliness and clarity making it very easy to read.",
        code: `import "enum"
import "io"

let NOBLE_GAS = ["Helium", "Neon", "Argon", "Krypton", "Xenon"]

var group_by_name_length = enum.group_by(len)

NOBLE_GAS
  |> group_by_name_length
  |> io.print`
    },
    {
        title: "Paradigms 👾",
        text: "Argon supports different programming paradigms, this allows developers to choose the style that best fits the needs of the project.",
        code:
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
for itm of obj_counters {
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
        title: "Scalable 🚀",
        text: "Thanks to its architecture it is possible to run a huge amount of tasks simultaneously, your programs can scale and stay lightning fast.",
        code:
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

const FeatureSource = ({ title, text, code }: FeatureSourceItem) => (
    <div className={clsx("row", styles.featureWithCode)}  >
        <div className="col">
            <CodeBlock
                language="js"
                showLineNumbers>
                {code}
            </CodeBlock>
        </div>
        <div className="col col-4">
            <table style={{ textAlign: "left" }}>
                <tbody>
                    <tr style={{ border: "none" }}>
                        <td style={{ border: "none" }}>
                            <h1>{title}</h1>
                            <p style={{ fontSize: "1.2rem" }}>
                                {text}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const FeaturesSource = () => <>{FeatureSourceList.map((props, idx) => <FeatureSource key={idx} {...props} />)}</>

export default FeaturesSource;
