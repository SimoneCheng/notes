import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          整理 Web、Compiler、Systems 與 Computer Science 的學習軌跡
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/web/web-resources">
            開始閱讀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Simone 的 Web、Compiler、Systems 與 Computer Science 技術筆記">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.about}>
          <div className="container">
            <Heading as="h2">關於這些筆記</Heading>
            <p>
              這裡記錄目前正在學習的技術主題，也收集值得回頭閱讀的文章與資源。
              內容會持續更新，有些篇章也可能仍在整理中。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
