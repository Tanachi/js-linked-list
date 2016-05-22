/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;
  var Node = function() {
    this.value = null;
    this.next = null;
  };

  function getHead(){
    return head;
  }
  function getTail(){
    return tail;
  }

  function add(item){
    var insert = new Node();
    insert.value = item;
    if(head === null){
      head = insert;
      tail = insert;
    }
    else{
      tail.next = insert;
      tail = insert;
    }
    length++;
    return insert;
  }

  function get(num){
  if(isNaN(num) || num < 0)
    return false;
  if(num === 0)
    return head;
  var item = head;
  while(num > 0){
    if(item.next !== null){
      item = item.next;
      num--;
    }
    else
      return false;
  }
  return item;
  }

  function remove(num){
    if(isNaN(num) || num < 0)
      return false;
    if(head === null)
      return false;
    if(num === 0){
      var zeal = head.next;
      head = zeal;
      length--;
      return;
    }
    var item = null;
    var gogo = null;
    if(get(num) !== false){
      item = get(num);
      gogo = get(num - 1);
    }
    else
      return false;
    if(item === tail){
      tail = gogo;
      tail.next = null;
    }
    else{
      gogo.next = item.next;
      item.next = null;
    }
    length--;
  }

  function insert(value, num){
    if(isNaN(num) || num < 0)
      return false;
    var insert = new Node();
    insert.value = value;
    if(num < 0)
      return false;
    if(num === 0){
      insert.next = head;
      head = insert;
      length++;
      return;
    }
    var item = head;
    var gogo = null;

    if(get(num) !== false){
      item = get(num);
      gogo = get(num - 1);
    }
    else
      return false;
    gogo.next = insert;
    insert.next = item;
    length++;
    return insert;
  }

 function insertAdd(value, num){
  if(isNaN(num) || num < 0)
      return false;
  var insert = new Node();
  insert.value = value;
  if(!num){
    if(head === null){
      head = insert;
      tail = insert;
    }
    else{
      tail.next = insert;
      tail = insert;
    }
    length++;
    return insert;
  }
  else{
    if(num < 0)
      return false;
    if(num === 0){
      insert.next = head;
      head = insert;
      length++;
      return;
    }
    var item = head;
    var gogo = null;

    if(get(num) !== false){
      item = get(num);
      gogo = get(num - 1);
    }
    else
      return false;
    gogo.next = insert;
    insert.next = item;
    length++;
   }
 }
function getByValue(value){
  var item = head;
  while(item.next !== null){
    if(item.value === value)
      return item;
    item = item.next;
  }
  return false;
 }
 function insertByValue(value, ID){
  var insert = new Node();
  insert.value = value;
  if(!ID)
    return "No Value";
  var count = 0;
  var item = head;
  var found = false;
  while(found === false && item.next !== null){
    if(item.value === ID){
      found = true;
    }
    else{
      item = item.next;
      count++;
    }
  }
  if(found === false)
    return false;
  if(count === 0){
    insert.next = head;
    head = insert;
    return;
  }
  var gogo = get(count - 1);

  gogo.next = insert;
  insert.next = item;
  length++;
  return insert;
 }


 function deleteByValue(ID){
  if(head === null)
    return false;
  var count = 0;
  var item = head;
  var found = false;
  while(found === false && item.next !== null){
    if(item.value === ID)
      found = true;
    else{
      item = item.next;
      count++;
    }
  }
  if(found === false)
    return false;
  if(count === 0){
    var zeal = head.next;
    head = zeal;
    head.next = zeal.next;
    length--;
    return;
  }
  var gogo = get(count - 1);
   if(item === tail){
     tail = gogo;
     tail.next = null;
   }
   else{
     gogo.next = item.next;
     item.next = null;
   }
   length--;
 }
  var list = {
    getHead:getHead,
    getTail:getTail,
    add:add,
    get:get,
    remove:remove,
    insert:insert,
    insertAdd:insertAdd,
    getByValue:getByValue,
    insertByValue:insertByValue,
    deleteByValue:deleteByValue
  };

  return list;
}