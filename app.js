//GETELEMENTBY_CLASS_NAME
/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor='green';

for(var i=0;i<=items.length;i++){
    items[i].style.fontWeight='bold';
    // items[i].style.backgroundColor='purple';
}

//GETELEMENTBY_TAG_NAME
var li=document.getElementsByTagName('list-group-item');
console.log(li);
console.log(li[2]);
li[2].style.backgroundColor='green';

for(var i=0;i<=items.length;i++){
    li[i].style.fontWeight='bold';
    // li[i].style.backgroundColor='purple';
}

//QUERYSELECTOR & QUERYSELECTOR_ALL
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.fontWeight='green';


var lastItem=document.querySelector('.list-group-item');
lastItem.lastChild.remove();

var odd=document.querySelectorAll('.list-group-item');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
*/

//Travrsing the DOM
var itemList=document.querySelector('#items');
//parentNOde
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNode
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

// firstChild & firstElementChild
console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello1';

// LastChild & LastElementChild
console.log(itemList.lastChild);

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello2';

//nextSibling & nextElementSibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previuosSibling & previousElementSibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

/////// CREAT ELEMENT
// Creat a div
var newDiv=document.createElement('div');
 // adding Class,ID,Attribute
 newDiv.className='hellow';
 newDiv.id='hellow1';
 newDiv.setAttribute('title','Hello div');

//  Creat TextNode
var newdivText=document.createTextNode('Hello World');
 //add text to div
 newDiv.appendChild(newdivText);
  var container=document.querySelector('header .container');
  var h1=document.querySelector('header h1');
  console.log(newDiv);
  newDiv.style.fontSize='30px'
  container.insertBefore(newDiv,h1);




