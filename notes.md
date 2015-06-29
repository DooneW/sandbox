```js
var myObj = {
    this.a = "",
    this.b = null,
    this.c = [];
}

```
Above: Lines 3-5 are a single statement. Its evaluated on line 5.

```js
var myOtherObj = {
    this.a = "";
    this.b = null;
    this.c = [];
}

```
Above: There are 3 expressions here. Each line 12-14 is evaluated individually.

Semicolons end expressions. Commas separate statements.

It's convention to use semicolons, but you should never use both in the 
same app (pick one style or the other).

_Helpful links_
[Commas vs. Semicolons]:https://stackoverflow.com/questions/15485735/use-of-commas-versus-semicolons-in-javascript

Making Objects
-----------

```js

var myInventory = {}

myInventory.size = 6;
myInventory.items = [];
myInventory.count = 0;

myInventory.add = function(obj){
    if (this.count < this.size){
        this.items.push(obj);
        this.count ++;
    }
}
```
The above is the same as using the following literal.

```js

var $ = {
    this.size: 6,
    this.items: [],
    this.count: 0,
    this.add: function(obj){
        if(this.count < this.size){
            this.items.push(obj);
            this.count++;
        }
    }
}
```
You can try these objects in the console and see what happens!

Manipulating HTML
-----------------
You manipulate the HTML tags with these methods.

`document.querySelector`
`document.getElementById`
`document.getElementsByClassname`
`document.getElementByClass`
`document.getElementsByTagname`

There are more but you get the idea.

The `document` before the method is literally the HTML document itself. 

Type `document` into your browswer console and see what happens.

JQuery
------
It makes manipulating the DOM much easier. It's nothing but easier to use
JS.

Paste this into an HTML file and load it up in your browser. 
See what happens. Play with it.
```html
<html>
<head>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
    <h1>Using Javascript</h1>
    <div id="first">The first divider.</div>
    <div id="second">Another divider!</div>
    <p>If you want to see me disappear, click me ...</p>
    <button id="b1">Amazing, right?</button>
</body>

<script>
 
    // If paragraph is clicked, hide it.
    $("p").click(function(){
        $(this).hide();
    });
    // If button is clicked, change its text
    $("#b1").click(function(){
        $(this).text("You bet your ass.");
    });
    
</script>
</html
```
The above is in jquery.html on the left.

The same in JS:
```js
  var p = document.querySelector("p"),
      b1 = document.getElementById("b1");
    
  p.onclick = function(){
    this.style.display = 'none';
  }
  b1.onclick = function(){
    this.innerHTML = "You bet your ass."
  }
```

<div style="whatever" display=""></div>
    







