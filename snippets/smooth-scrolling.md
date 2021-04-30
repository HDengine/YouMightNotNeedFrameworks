## Smooth Scrolling

### jQuery framework
```js
$(document).ready(function(){  
  // Add smooth scrolling to all links  
  $("a").on('click', function(event) {  
  
    // Make sure this.hash has a value before overriding default behavior  
    if (this.hash !== "") {  
      // Prevent default anchor click behavior  
      event.preventDefault();  
  
      // Store hash  
      var hash = this.hash;  
  
      // Using jQuery's animate() method to add smooth page scroll  
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area  
      $('html, body').animate({  
        scrollTop: $(hash).offset().top  
      }, 800, function(){  
  
       // Add hash (#) to URL when done scrolling (default click behavior)  
        window.location.hash = hash;  
      });  
    } // End if  
  });  
});
```
### CSS
```css
html {  
  scroll-behavior:  smooth;  
}
```

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__scroll-behavior-1619781454378.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__scroll-behavior-1619781454378.png">
<img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__scroll-behavior-1619781454378.jpg" alt="Data on support for the mdn-css__properties__scroll-behavior feature across the major browsers from caniuse.com">
</picture>
