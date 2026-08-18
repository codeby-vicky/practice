name = input("Enter a Word : ")
result = ""
for char in name:
    result = char + result

print("original string")
print(result) 

if(name == result):
    print(name, "is Palindrome")
else:
    print(name, "is Not a palindrome")
