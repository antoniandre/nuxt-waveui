# nuxt-waveui

## To setup Wave UI in Nuxt.

1. Install the dependencies:

    - `npm i wave-ui`
    - `npm i -D @wave-ui/nuxt pug pug-plain-loader node-sass sass-loader`

    _The dev dependenies are only needed for building the project. They will not ship on production.__

2. In nuxt.config.js, add this:

    ```js
    buildModules: [
      '@wave-ui/nuxt' // Simple config.

      // Or with options.
      // ['@wave-ui/nuxt', { /* Wave UI config here. */ }]
    ],
    ```


3. in default.vue, wrap the `nuxt` component in a `w-app`:

    ```html
    <template>
      <w-app>
        <Nuxt />
      </w-app>
    </template>
    ```

4. You can now try to add a `w-button` in the `pages/index.vue`:

    ```html
    <w-button>Testing</w-button>
    ```

_____



## For more customization, if you use SCSS.

In nuxt.config.js, add this:

  ```js
  buildModules: [
    [
      '@wave-ui/nuxt',
      {
        // Your Wave UI config here.

        // Path to your SCSS variables.
        useScss: '~/scss/_variables.scss'
      }
    ]
  ],
  ```
