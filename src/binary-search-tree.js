const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }
  //===============================================================
  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }
  //===============================================================
  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }

    const newNode = new Node(data);
    let currentNode = this.rootNode;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          continue;
        }
        currentNode.left = newNode;
        return;
      }
      if (newNode.data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          continue;
        }
        currentNode.right = newNode;
        return;
      }

    }

  }
  //===============================================================
  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          continue;
        }
      }
      if (data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          continue;
        }
      }
      return false;
    }

  }
  //===============================================================


  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          continue;
        }
      }
      if (data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          continue;
        }
      }
      return null;
    }


  }
  //===============================================================


  remove(data) {
    let currentNode = this.rootNode;
    let prevNode = null;

    while (currentNode) {
      if (data === currentNode.data) {
        // когда у узла нет дочерних узлов
        if (!currentNode.left && !currentNode.right) {
          // удаление левого листа
          prevNode.left = prevNode.data > currentNode.data ? null : prevNode.left;
          // удаление правого листа
          prevNode.right = prevNode.data < currentNode.data ? null : prevNode.right;
          return;
        }
        // когда у узла есть только слева дочерние узлы
        if (currentNode.left && !currentNode.right) {
          if (currentNode === this.rootNode) {
            this.rootNode = currentNode.right;
            return;
          }

          prevNode.left = prevNode.data > currentNode.data ? currentNode.left : prevNode.left;
          prevNode.right = prevNode.data > currentNode.data ? currentNode.left : prevNode.right;
          return;
        }

        // когда у узла есть только справа дочерние узлы
        if (currentNode.right && !currentNode.left) {

          if (currentNode === this.rootNode) {
            this.rootNode = currentNode.right;
            return;
          }

          prevNode.left = prevNode.data > currentNode.data ? currentNode.right : prevNode.left;
          prevNode.right = prevNode.data < currentNode.data ? currentNode.right : prevNode.right;
          return;
        }
        // когда у узла есть потомки справа и слева
        // находим максимальное значение в левой ветке
        if (currentNode.right && currentNode.left) {
          //console.log(`prevNode: ${prevNode}`);

          let maxValInLeft = currentNode.left;
          let prevMaxVal = null;
          while (maxValInLeft.right) {
            if (maxValInLeft.right) {
              prevMaxVal = maxValInLeft;
              maxValInLeft = maxValInLeft.right;
              continue;
            }
          }

          const currentLeftNode = currentNode.left;
          const currentRightNode = currentNode.right;
          maxValInLeft.left = maxValInLeft !== currentLeftNode ? currentLeftNode : maxValInLeft.left;
          maxValInLeft.right = maxValInLeft !== currentRightNode ? currentRightNode : maxValInLeft.right;

          if (currentNode === this.rootNode) {
            this.rootNode = maxValInLeft;
            if (prevMaxVal !== null) prevMaxVal.right = null;
            return;
          }
          prevNode.left = prevNode.data > currentNode.data ? maxValInLeft : prevNode.left;
          prevNode.right = prevNode.data < currentNode.data ? maxValInLeft : prevNode.right;

          //prevMaxVal.right = !prevMaxVal.right ? null;
          if (prevMaxVal !== null) prevMaxVal.right = null;
          return;
        }
      }
      if (data < currentNode.data) {
        if (currentNode.left) {
          prevNode = currentNode;
          currentNode = currentNode.left;
          continue;
        }
      }
      if (data > currentNode.data) {
        if (currentNode.right) {
          prevNode = currentNode;
          currentNode = currentNode.right;
          continue;
        }
      }

    }
  }

  //===============================================================
  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let currentNode = this.rootNode;

    while (currentNode) {

      if (currentNode.left) {
        currentNode = currentNode.left;
        continue;
      }
      return currentNode.data;
    }
  }
  //===============================================================
  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNode = this.rootNode;

    while (currentNode) {

      if (currentNode.right) {
        currentNode = currentNode.right;
        continue;
      }
      return currentNode.data;
    }

  }
}

module.exports = {
  BinarySearchTree
};