import React, { memo } from 'react';

import styles from './loading.scss';

const Loading = ({ loading }) => (
  <>
    {loading && <ul className={styles.container}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>}
  </>
)

export default memo(Loading);