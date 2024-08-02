export class SinglyLinkedItem {
  data: any = null;
  next: any = null;

  constructor(value: any) {
    this.data = value;
  }
}

export class DoublyLinkedItem extends SinglyLinkedItem {
  prev: any = null;
}

export class SinglyLinkedList {
  first: SinglyLinkedItem | null = null;
  last: SinglyLinkedItem | null = null;

  addToEnd(value: any) {
    const item = new SinglyLinkedItem(value);

    if (!this.first) {
      this.first = item;
    }

    if (this.last) {
      this.last.next = item;
    }

    this.last = item;

    return this;
  }

  find(findFunc: (el: SinglyLinkedItem) => boolean) {
    let el = this.first;

    if (!el) return null;

    while (el) {
      const isFound = findFunc(el);

      if (isFound) {
        return el;
      }

      el = el.next;
    }

    return null;
  }

  /**
   * @returns {boolean} deleting status
   */
  remove(item: SinglyLinkedItem): boolean {
    if (this.first === item) {
      this.first = item.next;
      return true;
    }

    let el = this.first;

    while (el) {
      if (el.next === item) {
        el.next = item.next;
        return true;
      }

      el = el.next;
    }

    return false;
  }
}

export class DoublyLinkedList extends SinglyLinkedList {
  first: DoublyLinkedItem | null = null;
  last: DoublyLinkedItem | null = null;

  addToEnd(value: any) {
    const item = new DoublyLinkedItem(value);

    if (!this.first) {
      this.first = item;
    }

    item.prev = this.last;

    if (this.last) {
      this.last.next = item;
    }

    this.last = item;

    return this;
  }

  remove(item: DoublyLinkedItem): boolean {
    if (!item) return false;

    if (item.prev) {
      item.prev.next = item.next;
    }

    if (item.next) {
      item.next.prev = item.prev;
    } else {
      this.last = item.prev;
    }

    return true;
  }
}
