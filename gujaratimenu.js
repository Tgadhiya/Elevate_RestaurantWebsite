// load more button.........

let loadMoreBtn = document.querySelector('.menu #load-more');
let currentItem = 5;
loadMoreBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll('.menu .box-container .box')];
  for (var i = currentItem; i < currentItem+5; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 5;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}