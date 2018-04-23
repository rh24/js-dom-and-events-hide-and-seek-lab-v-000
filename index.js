function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');

  for (let k = 0, l = lis.length; k < l; k++) {
    let children = lis[k].children;

    for (let i = 0, j = children.length; i < j; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
