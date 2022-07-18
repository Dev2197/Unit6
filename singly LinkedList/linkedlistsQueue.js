const LinkedList = require('./linkedlists2.js')

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }

    enqueue(data){
        this.list.append(data)
    }

    dequeue(data){
        this.list.removeFromFront(data)
    }

    peek(){
        return console.log(this.list.head.data)
    }

    display(){
        return this.list.print();
    }
}

const queue = new LinkedListQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display();

queue.peek();



queue.dequeue();

queue.display();