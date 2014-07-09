Timerish
=====================

```js
var Timerish = require("timerish");
var tick = Timerish();
tick("One");
setTimeout(function () {
	tick("Two", 3);
	setTimeout(function () {
		tick("Three");
		console.log(tick.log);
	}, 100);
}, 100);
```

```
{ One: { k: 'One', t: 0.001178848 },
  Two: { k: 'Two', t: 0.377345041, d: 3 },
  Three: { k: 'Three', t: 0.100925582 } }
```
