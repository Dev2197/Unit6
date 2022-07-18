class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedLists2{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return console.log("List Size", this.size)
    }

    prepend(data){
        const node = new LinkedListNode(data)

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }

    append(data){
        const node = new LinkedListNode(data)

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty())
        {
            return null;
        }

        const data = this.head.data;
        this.head = this.head.next;
        this.size--;

        return data;
    }

    removeFromEnd(){
        if(this.isEmpty())
        {
            return null;
        }

        const data = this.tail.data
        if(this.size === 1)
        {
            this.head = null;
            this.tail =null;
        }
        else{
            let prev = this.head;

            while(prev.next !== this.tail)
            {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev; 
        }

        return data;
    }

    print(){
        return console.log(this.head)
    }
}

// let list = new LinkedLists2();

// list.append(10);
// list.append(20);
// list.append(30);
// list.prepend(5);
// list.prepend(1);

// list.print();

// console.log(list.removeFromEnd());
// list.print();

// console.log(list.removeFromFront());
// list.print();

module.exports = LinkedLists2;