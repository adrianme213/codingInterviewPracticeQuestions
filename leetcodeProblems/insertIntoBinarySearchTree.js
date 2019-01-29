var insertIntoBST = function(root, val) {
    const newTree = new TreeNode(val);
    let current = root;
    let mySwitch = true;

    while(mySwitch) {
    	if (newTree.val < current.val && current.left === null) {
      	current.left = newTree;
        mySwitch = false;
      } else if (newTree.val < current.val) {
      	current = current.left;
      } else if (newTree.val > current.val && current.right === null) {
      	current.right = newTree;
        mySwitch = false;
      } else if (newTree.val > current.val) {
      	current = current.right;
      }
    }

    return root;
};


var insertIntoBST = function(root, val) {
    const newTree = new TreeNode(val);

		if (newTree.val < root.val && root.left === null) {
    	root.left = newTree;
    } else if (newTree.val < root.val) {
    	insertIntoBST(root.left, val);
    } else if (newTree.val > root.val && root.right === null) {
    	root.right = newTree;
    } else if (newTree.val > root.val) {
    	insertIntoBST(root.right, val);
    }

    return root;

};
