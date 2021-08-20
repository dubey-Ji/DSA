subArray = [1,3,4,5,6]
result = 0
newArray = []
for i in range(0,len(subArray)):
    for j in range(i, len(subArray)):
        for k in range(i, j):
            if i == j:
                newArray.append(subArray[k])
            
print(newArray)    
        