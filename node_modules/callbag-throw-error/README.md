# callbag-throw-error

Callbag source factory that immediately emits an error.

## Example

```js
import concat from 'callbag-concat'
import of from 'callbag-of'
import pipe from 'callbag-pipe'
import subscribe from 'callbag-subscribe'
import throwError from 'callbag-throw-error'

pipe(
  concat(of(1, 2, 3), throwError('err'))
  subscribe({
    next: value => {
      console.log(value) // 1 2 3
    },
    error: err => {
      console.log(err) // 'err'
    },
  }),
)
```
