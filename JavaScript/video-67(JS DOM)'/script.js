console.log("Hello World")


// document.body
// <body>​…​</body>​<div class=​"container">​…​</div>​<script src=​"script.js">​</script>​</body>​
// document.body.child[1]
// VM330:1 Uncaught TypeError: Cannot read properties of undefined (reading '1')
//     at <anonymous>:1:20
// (anonymous) @ VM330:1Understand this error
// document.body.childNodes[0]
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:3000/JavaScript/video-67(JS%20DOM)'/index.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: div.containernextSibling: div.containernodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: bodyparentNode: bodypreviousElementSibling: nullpreviousSibling: nulltextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.firstElementChild

// cont.lastElementChild.style.color="red"
// 'red'

// continue.lastElementChild.parentElement

// document.body.firstElementChild.firstElementChild.style.backgroundColor="red"

document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[4].nextElementsSibling