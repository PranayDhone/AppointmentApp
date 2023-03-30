//GETELEMENTBY_CLASS_NAME
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor='green';

for(var i=0;i<=items.length;i++){
    items[i].style.fontWeight='bold';
    items[i].style.backgroundColor='purple';
}

//GETELEMENTBY_TAG_NAME
var li=document.getElementsByTagName('list-group-item');
console.log(li);
console.log(li[2]);
li[2].style.backgroundColor='green';

for(var i=0;i<=items.length;i++){
    li[i].style.fontWeight='bold';
    //li[i].style.backgroundColor='purple';
}

