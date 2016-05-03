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
