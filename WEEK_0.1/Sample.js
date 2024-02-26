class Node {
    constructor(value){
        this.value = value;
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
        return this.size;
    }

    prepend(value) { 
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size ++;
    }

    insert(value , index){
        if(index < 0 || index > this.getSize){
            console.log("Inserting not possible!!")
        }
        if(index === 0){
            list.prepend(value)
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0 ; i < index-1 ; i ++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size ++;
        }
    }

    removingFrom(index){
        if(index < 0 || index > this.getSize){
            return null;
        }
        let removedElem;
        if(index === 0){
            removedElem = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i = 0 ; i < index-1 ; i ++){
                prev = prev.next;
            }
            removedElem = prev.next;
            prev.next = removedElem.next;
        }
        this.size --;
        return removedElem;
    }

    removeEnd(){
        if(this.isEmpty()){
            console.log("Linked list is empty!!")
            return ;
        }if(this.head === 0){
            this.head = null;
            this.size = 0; 
        }else{
            let curr = this.head;
            let prev;
            while(curr.next){
                prev = curr;
                curr = curr.next;

            }
            prev.next = null;
            this.size --;
        }
    }

    removeFirst(){
        if(this.isEmpty()){
            console.log("LinkedList is Empty!!")
            return;
        }
         this.head = this.head.next;
         this.size --;
    }

     

    toArray() {
        if (this.isEmpty()) {
            return [];  
        }
        let arr = [];
        let curr = this.head;
        while (curr !== null) {
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }
    

    print(){
        if(this.isEmpty()){
            console.log("The list is Empty!!")
        }else{
            let curr = this.head;
            let values = '';
            while(curr){
                values += `${curr.value}  `
                curr = curr.next;
            }
            console.log(values);
        }
    }
}

const list = new LinkedList()
console.log("List is Empty ?",list.isEmpty());
console.log('List Size : ',list.getSize())
list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();
list.insert(40,2);
list.print();
list.insert(50,4);
list.print();

 console.log(list.toArray());
 
  