const LinkedList = require('./linkedlists2.js')


class LinkedListStack{
    constructor(){
        this.list = new LinkedList();
    }

    push(data){
        this.list.prepend(data)
    }

    pop(){
        this.list.removeFromFront();
    }

    peek(){
        return console.log(this.list.head.data)
    }

    display(){
        return this.list.print();
    }
}

let stack = new LinkedListStack();

stack.push(10)
stack.push(20)
stack.push(30);

stack.display();

stack.peek();

stack.pop();

stack.display();