## Ajax JSON

### jQuery
```js
$.getJSON('/my/url', function(data) {

});
```

### JavaScript (native)
```js
fetch('/my/url')
  .then(response => response.json())
  .then(data => console.log(data)); // Do something.
```

## Ajax GET

### jQuery
```js
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {

  },
  error: function() {

  }
});
```

### JavaScript

```js
fetch('/my/url')
  .then(data => console.log(data)) // Success
  .catch(error => console.log(error)); // Error
```

## Ajax POST

### jQuery

```js
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});
```

### JavaScript
```js
fetch('/my/url', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: data, // Data
});
```

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/fetch.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/fetch.png">
<img src="https://caniuse.bitsofco.de/image/fetch.jpg" alt="Data on support for the fetch feature across the major browsers from caniuse.com">
</picture>
