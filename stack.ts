import { LinkedItem, LinkedList } from './linked-list'

export class Stack {
  list: LinkedList
  count: number = 0

  constructor() {
    this.list = new LinkedList()
  }

  push(value: any) {
    this.list.addToEnd(value)
    this.count++
  }

  pop() {
    const result = this.list.remove(
      this.list.last
    )

    if (result) this.count--
  }

  get peek() {
    return this.list.last?.data ?? null
  }

  get isEmpty() {
    return this.peek === null
  }
}
