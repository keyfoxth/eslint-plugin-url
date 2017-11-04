# disallow the use of absolute URLs (no-absolute-url)

Absolute URLs will be terrible to maintain and debug. It is considered best-practice to use relative URLs.

## Rule Details

### Fail

``` js
'https://github.com'
'http://github.com'
```

### Pass

``` js
'https'
'http'
'//github.com'
'&url=https://github.com'
'&url=http://github.com'
```
