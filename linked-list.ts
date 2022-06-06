class LinkedItem {
  data: any = null
  next: any = null
  prev: any = null

  constructor(value: any) {
    this.data = value
  }
}

class LinkedList {
  last: any = null
  first: any = null

  addToEnd(value: any) {
    const item = new LinkedItem(value)

    if (!this.first) {
      this.first = item
    }

    item.prev = this.last

    if (this.last) {
      this.last.next = item
    }

    this.last = item

    return this
  }

  find(findFunc: (el: LinkedItem) => boolean) {
    let el: LinkedItem = this.first

    if (!el) return null

    while(el) {
      const isFound = findFunc(el)

      if (isFound) {
        return el
      }

      el = el.next
    }

    return null
  }

  /**
   * @returns {boolean} deleting status
   */
  remove(item: LinkedItem | null): boolean {
    if (!item) return false

    if (item.prev) {
      item.prev.next = item.next
    }

    if (item.next) {
      item.next.prev = item.prev
    } else {
      this.last = item.prev
    }

    return true
  }
}
