const linkedList = function() {
  this.length = 0;

  this.push = function(value) {
    this.tail = new item(value, null, this.tail);
    if(this.length >= 1) {
      this.tail.prev.next = this.tail;
    } else {
      this.head = this.tail;
    }
    this.length++;
  };

  this.pop = function() {
    if(this.length === 0) {
      return undefined;
    }
    this.length--;
    const target = this.tail;
    this.tail    = target.prev;
    if(this.length === 0) {
      this.head = this.tail;
    }
    item.delete();
    return target.val;
  };

  this.shift = function() {
    if(this.length === 0) {
      return undefined;
    }
    this.length--;
    const target = this.head;
    this.head    = target.next;
    if(this.length === 0) {
      this.tail = this.head;
    }
    item.delete();
    return target.val;
  };

  this.unshift = function(value) {
    this.head = new item(value, this.head, null);
    if(this.length >= 1) {
      this.head.next.prev = this.head;
    } else {
      this.tail = this.head;
    }
    this.length++;
  };

  this.count = function() {
    return this.length;
  };

  this.delete = function(value) {
    let target = this.head;
    while(target && target.val !== value) {
      target = target.next;
    }
    if(target) {
      this.length--;
      item.delete();
    }
  };

};

const item   = function(value, next, prev) {
  this.val   = value;
  this.next  = next;
  this.prev  = prev;
};

item.delete = function() {
  if(this.prev) {
    this.prev.next = this.next;
  }
  if(this.next) {
    this.next.prev = this.prev;
  }
  this.next = null;
  this.prev = null;
};

module.exports = linkedList;
