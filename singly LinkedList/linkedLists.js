class LinkedListNode{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return console.log(this.size);
    }

    //prepend insert content at the beginning
    //Time Complexity O(1)
    prepend(data){
        const node = new LinkedListNode(data)

        if(this.isEmpty())
        {
            this.head = node
        }
        else{
            node.next = this.head;
            this.head = node
        }

        this.size++;
    }

    //append inserts specified content at the end
    //Time Complexity O(n)
    append(data){
        const node = new LinkedListNode(data);
        if(this.isEmpty())
        {
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next)
           {
             prev = prev.next;
           }
           prev.next = node;
        }
        this.size++;
    }

    //Insert Node at Specific Position
    insertNode(data,position){
        if(position < 0 || position > this.size)
        {
            return;
        }
        if(position === 0)
        {
            this.prepend(data)
        }
        else{
            let node = new LinkedListNode(data);
            let prev = this.head;

            for(let i=1; i<position; i++)
            {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    //Delete Node
    deleteNode(position){
        if(position < 0 || position >= this.size){
            return null;
        }
        let removeNode;
        if(position === 0)
        {
            removeNode = this.head;
            this.head = this.head.next;
        }
        else{
            let prev = this.head;
            for(let i=0; i<position-1; i++)
            {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode;
    }

    //Delete Node By Value
    deleteNodeByValue(data){
        if(this.isEmpty())
        {
            return null;
        }

        if(this.head.data === data)
        {
            this.head = this.head.next;
            this.size--;
            return data;
        }
        else{
            let prev = this.head;

            while(prev.next && prev.next.data != data)
            {
                prev = prev.next;
            }

            if(prev.next)
            {
                let removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return removeNode;
            }

            return null;
        }
    }

    //Check the value is present in the list or not
    search(data){
        if(this.isEmpty()){
            return false;
        }

        let curr = this.head;
        let i = 0;

        while(curr)
        {
            if(curr.data === data)
            {
                return i;
            }
            curr = curr.next;
            i++;
        }

        return -1;
    }

    //Reverse list

    reverse(){
        let prev = null;
        let curr = this.head;

        while(curr)
        {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    //Print
    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }
        else{
            let curr = this.head;
            console.log(curr)

            // let listValues = "";
            // while(curr)
            // {
            //     listValues+=`${curr.data} `
            //     curr= curr.next;
            // }
            // console.log(listValues)
        }
    }
}

const list = new LinkedList()

// console.log(list.isEmpty())
// console.log(list.getSize())
// list.print();

list.prepend(10);
// list.print();

list.prepend(20);
list.prepend(30);

list.append(40);
list.append(50);

list.insertNode(100,0);
list.insertNode(200,3);
list.print()
list.getSize();

// list.deleteNode(0)
console.log(list.deleteNode(3));
list.print();
list.getSize();

console.log(list.deleteNodeByValue(40))
list.print();
list.getSize();

list.reverse();
list.print();

console.log("Search",list.search(50))
console.log("Search",list.search(500))







