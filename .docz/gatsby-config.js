const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Otp Input',
    description:
      'A fully customizable, one-time password input component for the web built with React',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'H:\\react-otp-input\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Otp Input',
        description:
          'A fully customizable, one-time password input component for the web built with React',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'H:\\react-otp-input',
          templates:
            'H:\\react-otp-input\\node_modules\\docz-core\\dist\\templates',
          packageJson: 'H:\\react-otp-input\\package.json',
          docz: 'H:\\react-otp-input\\.docz',
          cache: 'H:\\react-otp-input\\.docz\\.cache',
          app: 'H:\\react-otp-input\\.docz\\app',
          appPublic: 'H:\\react-otp-input\\.docz\\public',
          appNodeModules: 'H:\\react-otp-input\\node_modules',
          appPackageJson: 'H:\\react-otp-input\\package.json',
          appYarnLock:
            'H:\\react-otp-input\\node_modules\\docz-core\\yarn.lock',
          ownNodeModules:
            'H:\\react-otp-input\\node_modules\\docz-core\\node_modules',
          gatsbyConfig: 'H:\\react-otp-input\\gatsby-config.js',
          gatsbyBrowser: 'H:\\react-otp-input\\gatsby-browser.js',
          gatsbyNode: 'H:\\react-otp-input\\gatsby-node.js',
          gatsbySSR: 'H:\\react-otp-input\\gatsby-ssr.js',
          importsJs: 'H:\\react-otp-input\\.docz\\app\\imports.js',
          rootJs: 'H:\\react-otp-input\\.docz\\app\\root.jsx',
          indexJs: 'H:\\react-otp-input\\.docz\\app\\index.jsx',
          indexHtml: 'H:\\react-otp-input\\.docz\\app\\index.html',
          db: 'H:\\react-otp-input\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
