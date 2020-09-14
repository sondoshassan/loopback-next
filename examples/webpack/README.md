# @loopback/example-webpack

This example illustrates how to bundle `@loopback/core` using
[webpack](https://webpack.js.org/) to allow LoopBack's Dependency Injection can
be run inside a browser.

## Webpack configurations

We add two webpack configuration files:

- webpack-node.config.js: generating Node.js friendly bundle
- webpack-web.config.js: generating browser friendly bundle

## Use

Use one of the following commands to build `dist/bundle.js` to package this
example application into a JavaScript file for browsers.

```sh
npm run build:webpack
```

```sh
npx webpack --config webpack-web.config.js
npx webpack --config webpack-node.config.js
```

Now `dist/bundle.js` can be used for HTML pages, for example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>LoopBack 4 Core Modules WebPack Demo</title>
    <script src="dist/bundle.js" charset="utf-8"></script>
  </head>
  <body>
    <script>
      async function greet() {
        const element = document.createElement('div');

        // Exported TypeScript functions/classes/types/constants are now
        // available under `LoopBack` namespace
        const greetings = await LoopBack.main();

        const list = greetings.map(g => `<li>${g}</li>`);
        element.innerHTML = `
  <h1>Hello from LoopBack</h1>
  <p/>
  <ul>
    ${list.join('\n')}
  </ul>`;

        return element;
      }

      greet().then(element => document.body.appendChild(element));
    </script>
  </body>
</html>
```

Open `index.html` in a browser, you'll see LoopBack is now running inside the
browser as client-side JavaScript:

```
Hello from LoopBack:
[2020-09-14T07:54:09.220Z] (en) Hello, Jane!
[2020-09-14T07:54:09.227Z] Hello, John!
[2020-09-14T07:54:09.230Z] (zh) 你好，John！
[2020-09-14T07:54:09.231Z] (en) Hello, Jane!
```

## Contributions

- [Guidelines](https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md)
- [Join the team](https://github.com/strongloop/loopback-next/issues/110)

## Tests

Run `npm test` from the root folder.

## Contributors

See
[all contributors](https://github.com/strongloop/loopback-next/graphs/contributors).

## License

MIT
