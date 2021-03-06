module.exports = {
     // site config
     lang: 'en-US',
     title: 'Hello, VuePress!',
     description: 'This is my first VuePress site',

     // theme and its config
     theme: '@vuepress/theme-default',
     themeConfig: {
          logo: 'https://vuejs.org/images/logo.png',
          sidebar: [
               {
                    title: 'Components',
                    collapsable: false,
                    children: [
                         '/components/input-text.md',
                    ]
               }
          ]
     },
     base: '/saas-ui/'
}