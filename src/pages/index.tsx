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
          TODO: - [ ] Fill all the holes
        </Heading>
        <p className="hero__subtitle">
          這裡收集的是我挖了還沒填的技術坑。
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
            <Heading as="h3">關於這些筆記</Heading>
            <p>
              這裡放著我最近正在挖的技術坑，也收集一路上遇到的文章、Talk 與其他值得回頭看的資源。<br></br>
              有些內容還只是草稿，有些可能永遠填不完，但至少先記下來。<br></br>
              如果剛好對你也有幫助，那就太好了。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
