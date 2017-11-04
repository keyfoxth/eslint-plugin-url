# disallow the use of HTTP in hyperlinks (no-http)

HTTP is not safe enough.

## Rule Details

### Fail

``` js
'http://github.com'
'&url=http://github.com'
```

### Pass

``` js
'https'
'http'
'//github.com'
'https://github.com'
'&url=https://github.com'
```
