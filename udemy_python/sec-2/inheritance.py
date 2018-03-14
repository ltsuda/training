class Student:
    def __init__(self, name, school):
        self.name = name
        self.school = school
        self.marks = []
    
    def average(self):
        return sum(self.marks) / len(self.marks)

    @classmethod
    def friend(cls, origin, friend_name, *args):
        return cls(friend_name, origin.school, *args)

##

class WorkingStudent(Student):
    def __init__(self, name, school, salary, job):
        super().__init__(name, school)
        self.salary = salary
        self.job = job

student1 = WorkingStudent("Student1", "Oxford", 20.00, "Tester")
print(student1.salary)

friend = WorkingStudent.friend(student1, "Student2", 22.00, "Software Developer")
print(friend.name)
print(friend.school)
print(friend.salary)
print(friend.job)

