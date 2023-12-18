# DJR TestKit

This will provide three magical things at once:

1. A standalone demo site (likely `tester.djr.com`) where many type families can be tested and used
2. A lego kit ([svelte](https://svelte.dev) components) of functional UI primitives for creating type demos.
3. A plain JS (via webcomponents) version of the typetester that can be embedded anywhere.


Currently it's in early stages – it's not pretty.

More examples, options, and more coming soon.

## Config files

The type tester uses a config file to specific the typeface and the available settings. **It assumes that the font files are already loaded and available via CSS.**

You can find the spec for that [here](./src/lib/types.d.ts).

## Using the tester in plain HTML

[Demo code](./html-demo/index.html)

1. `$ npm i` install dependencies
2. `$ npm run build:static` Build the static version
3. Copy `dist/type-tester.umd.js` to wherever JS lives in your project.

Then:

```html
<!-- In your head or wherever -->
<script src="/path/to/type-tester.umd.js"></script>

<!-- Wherever you want a tester to show up -->
<type-tester config='{ ... }'></type-tester>
```