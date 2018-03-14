""" should_continue = True
if should_continue:
    print("hello")

know_people = ["John", "Anna", "Mary"]
person = input("Enter the person you know: ")

if person in know_people:
    print("You know {}!".format(person))
else:
    print("You don't know {}!".format(person)) """


## Exercise

def who_do_you_know():
    people = input("Enter a list of names separated by commas: ")
    people_list = people.split(",")
    people_without_spaces = [person.strip() for person in people_list]
    return people_without_spaces

def ask_user():
    person = input("Enter a name of someone you know: ")
    if person in who_do_you_know():  
        print("You know {}".format(person))

ask_user()
