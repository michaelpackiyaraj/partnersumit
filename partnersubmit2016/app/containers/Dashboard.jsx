import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
      <div>

        <Tabs>
          <TabList>
            <Tab>React</Tab>
            <Tab>Ember</Tab>
            <Tab>Angular</Tab>
          </TabList>

          <TabPanel>
            <h2>Just The UI</h2>
            <p>Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.</p>

            <h2>Virtual DOM</h2>
            <p>React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required.</p>

            <h2>Data Flow</h2>
            <p>React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.</p>

            <p>Source: <a href="http://facebook.github.io/react/" target="_blank">React</a></p>
          </TabPanel>
          <TabPanel>
            <h2>Handlebars</h2>
            <p>Write dramatically less code with Ember's Handlebars integrated templates that update automatically when the underlying data changes.</p>

            <h2>Architecture</h2>
            <p>Don't waste time making trivial choices. Ember.js incorporates common idioms so you can focus on what makes your app special, not reinventing the wheel.</p>

            <h2>Productivity</h2>
            <p>Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast.</p>

            <p>Source: <a href="http://emberjs.com/" target="_blank">Ember</a></p>
          </TabPanel>
          <TabPanel>
            <h2>Why AngularJS?</h2>
            <p>HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</p>

            <h2>Alternatives</h2>
            <p>Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views.</p>

            <h2>Extensibility</h2>
            <p>AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.</p>

            <p>Source: <a href="https://angularjs.org/" target="_blank">Angular</a></p>
          </TabPanel>
        </Tabs>

      </div>
    </div>
  );
};

export default Dashboard;
