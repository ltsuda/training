def methodception(another):
    return another()

def add_two():
    return 44 + 22

#print(methodception(add_two))
#print(methodception(lambda: 33 + 55))

my_list = [13, 45, 53, 61]
print(list(filter(lambda x: x != 13, my_list)))

print((lambda x: x * 5)(4))