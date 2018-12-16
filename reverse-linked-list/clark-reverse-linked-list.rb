class Node
  attr_accessor :data, :next_node

  def initialize(data, next_node)
    @data = data
    @next_node = next_node
  end
end

class Stack
  attr_accessor :head
  
  def initialize
    @head = nil
  end

  def push(data)
    @head = Node.new(data, @head)
  end

  def pop
    if empty?
      puts "Stack is empty"
      nil
    else
      popped_data = @head.data
      @head = @head.next_node
      popped_data
    end
  end

  def peek
    if empty?
      puts "Stack is empty"
      nil
    else
      @head
    end
  end
  
  private

  def empty?
    if @head == nil
      true
    else
      false
    end
  end
end

class LinkedList
  attr_accessor :head

  def initialize
    @head = nil
  end

  def add(data)
    @next_node = @head
    @head = Node.new(data, @head)
  end

  def insert_after(inserted_data, data)
    current = find(data)
    inserted_data = Node.new(inserted_data, current.next_node)
    current.next_node = inserted_data
  end

  def insert_before(inserted_data, data)
    current = find(data)
    inserted_data = Node.new(inserted_data, @previous_node_found.next_node)
    @previous_node_found.next_node = inserted_data
  end

  def update(updated_data, data)
    current = find(data)
    current.data = updated_data if current
  end

  def remove(data)
    current = find(data)
    @previous_node_found.next_node = current.next_node
  end

  def shift # should be in stack class
    shift_data = @head.data
    @head = @head.next_node
    shift_data
  end

  def find(data, current = @head)
    if current.data == data
      current
    else
      if current.next_node
        @previous_node_found = current
        find(data, current.next_node) 
      else
        false
      end
    end
  end  

  def print_data(current = @head)
    list = ''
    while current.next_node do
      list += "#{current.data} -> "
      current = current.next_node
    end
    list += "#{current.data} -> nil"
    puts list
  end

  def reverse_using_stack
    stack = Stack.new
    current = @head

    while current do
      stack.push(current.data)
      current = current.next_node
    end

    stack.head

  end

  def reverse_linked_list
    current = @head
    temp = nil

    while current do
      next_node = current.next_node
      current.next_node = temp
      temp = current
      current = next_node
    end
    @head = temp
  end
end



puts "Reverse using stack"
## EXAMPLE #1
linked_list = LinkedList.new
linked_list.add(1)
linked_list.add(2)
linked_list.add(3)

linked_list.print_data
reverse_list = linked_list.reverse_using_stack  # returns node
new_linked_list = LinkedList.new
new_linked_list.head = reverse_list    # assign a node to a linked list class, this is called composition.
new_linked_list.print_data

puts "Reverse using in place"
linked_list2 = LinkedList.new
linked_list2.add(4)
linked_list2.add(5)
linked_list2.add(6)

linked_list2.print_data
linked_list2.reverse_linked_list
linked_list2.print_data


=begin 
## EXAMPLE #2
# create and initialize a linked list
linked_list = LinkedList.new

# adds a node assign as head of linked list
linked_list.add("first node")
linked_list.add("second node")
linked_list.add("third node")
linked_list.add("fourth node")
linked_list.add("fifth node")

# find a node
linked_list.find("second node")   # returns current node
linked_list.find("sixth node")    # returns false

# update
# 1st parameter = new data
# 2nd paramter = data to be replaced
linked_list.update("new second node", "second node")

# remove specific node
linked_list.remove("third node")

# insert before a node
# 1st parameter = new data
# 2nd paramter = data to be inserted before
linked_list.insert_before("inserted node before", "fourth node")

# insert after a node
# 1st parameter = new data
# 2nd paramter = data to be inserted afters
linked_list.insert_after("inserted node after", "fourth node")

# removes and return data of head node
linked_list.shift

# print all data
linked_list.print_data
=end