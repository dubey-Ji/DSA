s = "abbaca"
arr1 = []
i = 0
for items in s:
    arr1.append(items)
print(arr1)
for items in arr1:
    if(items == arr1[i+1]):
        arr1.pop(i)
        arr1.pop(i+1)

print(arr1);