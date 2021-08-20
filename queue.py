a = []

def enqueue(val):
    a.append(val)

def dequeue():
    if(len(a) <= 0):
        print('Queue is empty')
    else:
        a.pop(0)

def get_first_element():
    if(len(a) <= 0):
        print('List is empty')
    else:
        print(a[0])

def print_queue():
    for i in range(len(a)-1, -1, -1):
        print(a[i])


enqueue(2)
enqueue(4)
enqueue(8)
enqueue(6)
dequeue()
print_queue()
get_first_element()