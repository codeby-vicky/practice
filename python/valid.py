def is_valid_indian_phone_number(phone_number):
    # Check if the phone number starts with '+91'
    if phone_number[0] != '+' or phone_number[1] != '9' or phone_number[2] != '1':
        return False
    
    # Extract the 10-digit number
    ten_digit_number = phone_number[3:]
    
    # Check if the length of the 10-digit number is exactly 10
    count = 0
    for char in ten_digit_number:
        if '0' <= char <= '9':
            count += 1
    
    if count != 10:
        return False
    
    # Check if the first digit of the 10-digit number is 7, 8, or 9
    if not (ten_digit_number[0] == '7' or ten_digit_number[0] == '8' or ten_digit_number[0] == '9'):
        return False
    
    return True

# Example usage:
phone_number = input("Enter a phone number: ")
if is_valid_indian_phone_number(phone_number):
    print("Valid Indian Phone Number")
else:
    print("Invalid Indian Phone Number")