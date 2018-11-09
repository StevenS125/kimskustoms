import React from 'react';
import styles from './Story.module.scss';

export default class Story extends React.Component {
  render() {
    return (
        <div className={styles.container}>
          <div className={styles.storyleft}>
          <h1>MEET KIM OF KIM'S KUSTOMS</h1>
          
          <p>Kim found her passion of restoring furniture in 2010 and 
              decided to open her own small business shortly after. Along with being 
              an artist with her furniture she is a wife and mother to a beautiful daughter.
          </p>
          </div>
            <div className={styles.storyright}>
            <img src="../../KimStoryedit.jpeg" alt="Kim the owner" className={styles.picture}/>
            </div>

      </div>
    );
  }
}