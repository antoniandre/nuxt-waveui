# nuxt-waveui

## To setup Wave UI in Nuxt.

1. In nuxt.config.js, add this:

    ```js
    buildModules: [
      'wave-ui/nuxt'
    ],

    waveui: {
      colors: {
        primary: '#9ac332',
        secondary: '#5d9a26',
      },
      // You can override the Wave UI SCSS variables in a custom file.
      // scssVariables: '~/scss/_variables.scss'
    }
    ```


2. in default.vue, wrap the `nuxt` component in a `w-app`:

    ```html
    <template>
      <w-app>
        <Nuxt />
      </w-app>
    </template>
    ```

3. You can now try to add a `w-button` in the `pages/index.vue`:

    ```html
    <w-button>Testing</w-button>
    ```


    "node-sass": "*",
    "pug": "^3.0.0",
    "pug-plain-loader": "^1.1.0",
    "sass-loader": "*",
    "vue": "^2.0.0",
    "wave-ui": "^1.15.0"
