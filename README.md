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
      }
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
