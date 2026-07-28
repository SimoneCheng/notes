import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Web',
    description: 'HTML、JavaScript、React、瀏覽器與 Web 平台相關筆記。',
    link: '/docs/web/web-resources',
  },
  {
    title: 'Compiler & Runtime',
    description: 'Compiler IR、JavaScript engine、bytecode 與 runtime。',
    link: '/docs/compiler-runtime/sea-of-nodes',
  },
  {
    title: 'Systems',
    description: 'CSAPP、Linux、Container 與 Database 等系統主題。',
    link: '/docs/systems/csapp-bomb-lab',
  },
  {
    title: 'CS Fundamentals',
    description: '資料結構、Git、協作方式與 Computer Science 學習資源。',
    link: '/docs/fundamentals/learning-resources',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className="col col--6">
      <Link className={styles.card} to={link}>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <span className={styles.cardLink}>閱讀筆記 →</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
