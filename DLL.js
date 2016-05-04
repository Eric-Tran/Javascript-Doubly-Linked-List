//Doubly-Linked List

//Create Node and DoublyList Contructors

//Node
	//data stores value
	//next points to next node in the list
	//previous points to the previous nodei n the list.

//DoublyList
	//_length - retrieves the number of nodes in the list.
	//head - assigns a node as the head of the list.
	//tail - assigns a nide as the tail of a list.
	//add(value) - adds a node to the list.
	//searchNodeAt(position) - searches for a nide a n-position in our list.
	//remove(position) - removes a node from a list.

//Implementation

function Node(value) {
	this.data = value;
	this.previous = null;
	this.next = null;
}

function DoublyList() {
	this._length = 0;
	this.head = null;
	this.tail = null;
}

//Doubly-Linked List Methods 

//Add
DoublyList.prototype.add = function(value) {
	var node = new Node(value);

	if (this._length > 0) {
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
	} else {
		this.head = node;
		this.tail = node;
	}
	this._length++;

	return node;
}

DoublyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
		length = this.length,
		count = 1,
		message = {failure: "Failure: non-existent node in this list"};

	//check for invalid position
	if (length === 0 || position < 1 || position > length) {
		throw new Error(message.failure);
	}

	//valid position
	while (count < position) {
		currentNode = curentNode.next;
		count++;
	}
	return currentNode;
}

DoublyList.prototype.remove = function(position) {
	var currentNode = this.head,
		length = this._length,
		count = 1,
		message = {failure: "Failure: non-existent node in this list"},
		beforeNodeToDelete = null,
		nodeToDelete = null,
		afterNodeToDelete = null;
		deletedNode = null;

	// check for invalid position
	if (length === 0 || position < 1 || position > length) {
		throw new Error(message.failure);
	}

	//if first node is removed
	if (position === 1) {
		deletedNode = this.head;
		this.head = currentNode.next;
		//if there is only one node
		if (!this.head) {
			this.tail = null;
		//if there is more than one node
		} else {
			this.head.previous = null;
		}

	//if the last node is removed
	} else if (position === this._length) {
		deletedNode = this.tail;
		this.tail = this.tail.previous;
		this.tail.next = null;

	// if a middle node is removed
	} else {
		while (count < position) {
			currentNode = currentNode.next;
			count++;
		}

		beforeNodeToDelete = currentNode.previous;
		nodeToDelete = currentNode;
		afterNodeToDelete = currentNode.next;

		beforeNodeToDelete.next = afterNodeToDelete;
		afterNodeToDelete.previous = beforeNodeToDelete;
		deletedNode = nodeToDelete;
		nodeToDelete = null;
	}
	this._length--;
	return deletedNode;
};
