# eslint-plugin-url

This is an ESLint plugin with rules that help validate proper URLs.

## Installation

Install `eslint-plugin-url`

``` bash
npm install --save-dev eslint-plugin-url
```

## Usage

In `.eslintrc`

``` json
{
  "plugins": [
    "url"
  ],
  "rules": {
    // add rules here
  }
}
```

Or

``` json
{
  "extends": [
    "plugin:url/recommended"
  ],
  "rules": {
    // override/add rules here
  }
}
```

## Rules

| Rule ID | Description | Recommended | fixable |
| :-- | :-- | :-- | :-- |
| [no-absolute-url](./docs/rules/no-absolute-url.md) | disallow the use of absolute URLs | error | yes |
| [no-http](./docs/rules/no-http.md) | disallow the use of HTTP in hyperlinks | off | yes |
