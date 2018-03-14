""" my_variable = "hello, world"
for letter in my_variable:
    print(letter)

my_list = [1, 2, 5, 6, 22, 55]
for number in my_list:
    print(number ** 2) """

wants_number = True
while wants_number == True:
    print(10)
    user_input = input("Should we print again? (y/n) ")
    if user_input == 'n':
        wants_number = False
    