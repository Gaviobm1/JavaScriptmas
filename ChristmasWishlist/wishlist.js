const wishlist = [
  ];

function pushItem() {
const wishItem = document.getElementById("wishitem");
wishlist.unshift(wishItem.value);
const mainDiv = document.getElementById('wishlist');
const newDiv = document.createElement('div');
if (wishlist.length % 2 == 0) {
    newDiv.className = "wishDivGreen wishDiv"
} else {
    newDiv.className = "wishDivRed wishDiv"
}
newDiv.textContent = wishlist[0];
newDiv.addEventListener('click', function () {
    for( let i = 0; i < wishlist.length; i++) {
    if (this.textContent == `${wishlist[i]}x`) {
        wishlist.splice(i, 1)
    }
}
})
const elim = document.createElement('button');
elim.setAttribute('id', 'deleteBut');
elim.setAttribute('onclick', 'return this.parentNode.remove()')
elim.textContent = "x";
mainDiv.appendChild(newDiv);
newDiv.appendChild(elim);
wishItem.value = '';
}



document.getElementById('wishButton').addEventListener('click', pushItem);
document.getElementById('wishitem').addEventListener( 'keydown', (e) => {
    if (e.code === 'Enter') {
        pushItem();
    }
} )




