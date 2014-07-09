Timerish
=====================

```js
var timerish = require("./index");
var tick = timerish();
tick("One");
setTimeout(function () {
	tick("Two", 3);
	tick.start("Custom");
	setTimeout(function () {
		tick("Three");
		setTimeout(function () {
			tick.stop("Custom", "OK");
			console.log(tick.log);
		}, 100);
	}, 100);
}, 100);
```

Results:
```
{ One: { k: 'One', t: 0.000044049 },
  Two: { k: 'Two', t: 0.102249436, d: 3 },
  Three: { k: 'Three', t: 0.10240654 },
  Custom: { k: 'Custom', t: 0.203374819, d: 'OK' } }
```
