#Lists - mutable
grades = [77, 80, 90, 95, 100]
grades.append(99)
#print(sum(grades) / len(grades))
#print(grades[0])

#Tuples - immutable
tuple_grades = (77, 80, 90, 95, 100)
tuple_grades = tuple_grades + (75,)
#print(tuple_grades)

#Sets - collection of unique and unordered
set_grades = {77, 80, 99, 100, 100}
set_grades.add(50)
#print(set_grades)


# Set operations
set_one = {1, 2, 3, 4, 5}
set_two = {1, 3, 5, 7, 9, 11}

#print(set_one.intersection(set_two))
#print(set_one.union(set_two))
print({1, 2, 3, 4}.difference({1, 2}))