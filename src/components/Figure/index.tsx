import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './styles.module.css';

type FigureProps = {
    src: string;
    caption: string;
    alt?: string;
}

function Figure(props: FigureProps) {
    const {
        src,
        caption, 
        alt
    } = props;

    return (
      <figure>
        <img src={useBaseUrl(src)} alt={alt ?? caption} />
        <figcaption className={styles.figcaption}>{`${caption}`}</figcaption>
      </figure>
    )
  }

export default Figure;
