import React from "react";
import styles from './About.css'

function About(props) {
  if (props.staticContext) {
    props.staticContext.css.push(styles._getCss())
  }
  return <div className={styles.title}>关于页面</div>;
}

export default About;
