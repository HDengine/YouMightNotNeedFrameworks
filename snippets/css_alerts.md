# Alerts
Provide feedback messages for typical user actions.

### Bootstrap Alerts

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

### CSS Alerts


```css
/* The alert message box */
.alert {
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid lightgray;
  border-radius: .25rem;
}

.danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}

/* The close button */
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

/* When moving the mouse over the close button */
.closebtn:hover {
  color: black;
}
```

```html
<div class="alert danger">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
</div>
```
