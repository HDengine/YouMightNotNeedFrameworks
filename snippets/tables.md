## Tables
### Bootstrap
```html
<table class="table">
  ...
</table>
```
### CSS
```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}
```
## Zebra Striped Tables
### Bootstrap
```html
<table class="table table-striped">
  ...
</table>
```
### CSS
```css
tr:nth-child(even) {
  background-color: #f2f2f2;
}
```
## Responsive Tables
### Bootstrap
```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

### CSS
```html
<div style="overflow-x:auto;">  
  <table>  
    ...  
  </table>  
</div>
```
