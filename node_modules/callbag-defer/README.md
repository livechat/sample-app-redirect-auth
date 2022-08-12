# callbag-defer

Callbag which creates a source from a given factory when sink subscribes.

## Example

```js
import defer from 'callbag-defer'
import forEach from 'callbag-for-each'
import fromEvent from 'callbag-from-event'
import interval from 'callbag-interval'
import pipe from 'callbag-pipe'

pipe(
  defer(() =>
    Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000),
  ),
  forEach(value => {
    // value being either click event or a number
  }),
)
```
