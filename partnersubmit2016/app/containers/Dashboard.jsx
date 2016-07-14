import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/dashboard';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Dashboard = () => {
  return (
    <div className={cx('dashboard')}>
      <h1 className={cx('header')}>PartnerSummit 2016</h1>
      <div className={cx('description')}>
        <p>Imagine an ocean of ninjas. Now think of it as a metaphor.<br />
          Seriously, we love good tech. React, redux, scala, Haskell, machine learning, you name it!
        </p>
      </div>
      <div className={cx('contribute')}>
        <p>Want to contribute? Help us out!
          If you think the code on &nbsp;
          
        &nbsp;could be improved, please create an issue&nbsp;
          
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
