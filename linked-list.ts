export class SinglyLinkedItem<DataType> {
  data: DataType | null = null;
  next: SinglyLinkedItem<DataType> | null = null;

  constructor(value: DataType) {
    this.data = value;
  }
}

export class DoublyLinkedItem<DataType> extends SinglyLinkedItem<DataType> {
  prev: any = null;
  next: DoublyLinkedItem<DataType> | null = null;
}

export class SinglyLinkedList<DataType> {
  first: SinglyLinkedItem<DataType> | null = null;
  last: SinglyLinkedItem<DataType> | null = null;
  addToEnd(value: DataType) {
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

  find(value: DataType) {
    let el = this.first;

    if (!el) return null;

    while (el) {
      if (el.data === value) {
        return el;
      }

      el = el.next;
    }

    return null;
  }

  /**
   * @returns {boolean} deleting status
   */
  remove(item: SinglyLinkedItem<DataType> | null): boolean {
    if (!item) return false;

    if (this.first === item) {
      if (!this.first?.next) {
        this.last = null;
      }

      this.first = this.first.next;

      return true;
    }

    let el = this.first;

    while (el) {
      if (el.next === item) {
        el.next = item.next;

        if (!el.next) {
          this.last = el;
        }

        return true;
      }

      el = el.next;
    }

    return false;
  }
}

export class DoublyLinkedList<DataType> extends SinglyLinkedList<DataType> {
  first: DoublyLinkedItem<DataType> | null = null;
  last: DoublyLinkedItem<DataType> | null = null;

  addToEnd(value: DataType) {
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

  remove(item: DoublyLinkedItem<DataType> | null): boolean {
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
