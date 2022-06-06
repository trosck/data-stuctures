## Linked list

```javascript
const linkedList = new LinkedList()

linkedList.addToEnd(1)
linkedList.addToEnd(2)
linkedList.addToEnd(3)
linkedList.addToEnd(4)
linkedList.addToEnd(5)
linkedList.addToEnd(6)
linkedList.addToEnd(7)

linkedList.remove(
  linkedList.last
)

console.log(linkedList.last.data) // 6
```

## Stack

```javascript
const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

stack.pop() // 5

console.log(
  stack.peek // 4
)
```
