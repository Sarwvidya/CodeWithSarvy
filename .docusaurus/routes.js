import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '529'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a9c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '83b'),
            routes: [
              {
                path: '/docs/core-java/jvm-memory-model',
                component: ComponentCreator('/docs/core-java/jvm-memory-model', '76a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/core-java/oops-concepts',
                component: ComponentCreator('/docs/core-java/oops-concepts', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/devops/git-workflows',
                component: ComponentCreator('/docs/devops/git-workflows', '4bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dsa/time-space-complexity',
                component: ComponentCreator('/docs/dsa/time-space-complexity', '550'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/react/modern-javascript',
                component: ComponentCreator('/docs/react/modern-javascript', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/spring-boot/spring-core-ioc',
                component: ComponentCreator('/docs/spring-boot/spring-core-ioc', '7b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-design/sql-indexing',
                component: ComponentCreator('/docs/system-design/sql-indexing', 'd4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
