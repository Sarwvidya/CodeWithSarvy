// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeWithSarvy',
  tagline: 'Engineering Notes & Developer Portfolio',
  favicon: 'favicon.svg',

  url: 'https://codewithsarvy.dev',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ['./plugins/auto-card-toc.js'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'codewithsarvy',
        logo: {
          alt: 'CodeWithSarvy Logo',
          src: 'favicon.svg',
        },
        items: [
          {
            to: '/#about',
            label: 'About',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/sarwvidya',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/sarwvidya',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Knowledge Vault',
            items: [
              {
                label: 'Core Java',
                to: '/docs/core-java/oops-concepts',
              },
              {
                label: 'DSA & Algorithms',
                to: '/docs/dsa/time-space-complexity',
              },
              {
                label: 'Spring Boot',
                to: '/docs/spring-boot/spring-fundamentals',
              },
              {
                label: 'React.js',
                to: '/docs/react/javascript-fundamentals',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sarwvidya',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/sarwvidya',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Sarwvidya (codewithsarvy). Built with Docusaurus & React.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'bash', 'json', 'sql', 'docker', 'yaml'],
      },
    }),
};

export default config;
