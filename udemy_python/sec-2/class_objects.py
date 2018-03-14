class LotteryPlayer:
    def __init__(self, name):
        self.name = name
        self.numbers = (5, 9, 22, 35, 1, 14)

    def total(self):
        return sum(self.numbers)

player1 = LotteryPlayer("Rolf")
player2 = LotteryPlayer("John")

##

class Student:
    def __init__(self, name, school):
        self.name = name
        self.school = school
        self.marks = []

    def average_marks(self):
        return sum(self.marks) / len(self.marks)

    @staticmethod
    def go_to_school():
        print("I'm going to school.")

anna = Student("Anna", "MIT")
rolf = Student("Rolf", "Oxford")
anna.marks.append(55)
anna.marks.append(42)
Student.go_to_school()
