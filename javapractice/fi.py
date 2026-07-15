class Student:
    def __init__(self):
        self.name = "fita stu"
        self.age = 20
        print("constru calll")

    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)

# Object Creation
s1 = Student()
s2=Student()
print(s1.name)
print(s1.age)
print("----")
print(s2.name)
print(s2.age)


# Method Call
#s1.display()