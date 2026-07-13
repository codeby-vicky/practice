package javapractice;
import java.util.*;

public class Tasks {
    public static void main(String []args){
        
        Scanner sc = new Scanner(System.in);

        System.out.println("Voter's Eligibility");
        System.out.println("Enter the age: ");
        int age = sc.nextInt();
        if(age >= 18){
            System.out.println("The person is eligible for voting");
        }
        else{
            System.out.println("The person is noteligible for voting");
        }
System.out.println();
System.out.println();
        System.out.println("Enter the Block Status of the User A: ");
        String user = sc.nextLine();
        if(user.equals("Block") || user.equals("block")){
            System.out.println("Login Successful!");
        }
        else{
            System.out.println("Login Failed! Try to Unblock the Status.");
        }
System.out.println();
System.out.println();
        System.out.println("+ve or -ve Value Check ->");
        System.out.println("Enter the Number to check +ve or -ve: ");
        int number = sc.nextInt();
        if (number > 0){
            System.out.println("It's Positive Value");
        }
        else if(number < 0){
            System.out.println("It's Negative Value");
        }
        else{
            System.out.println("You entered Zero!");
        }
System.out.println();
System.out.println();
        System.out.println("Student scholarship Eligibility");
        System.out.println("Enter the Mark of the Student(Above 80% Prefered): ");
        int mark = sc.nextInt();
        System.out.println("Enter the Attendance Percentage(Above 75% prefered): ");
        int attendance = sc.nextInt();

        if(mark >= 80){
            if(attendance >= 75){
                System.out.println("Eligible for scholarship!");
            }
        }
        else{
            System.out.println("Not Eligible for Scholarship!");
        }

        System.out.println();
        System.out.println();
        System.out.println("Loan Eligibility");
        System.out.println("Enter the age of the Person: ");
        int personage = sc.nextInt();
        System.out.println("Enter the Salary of the person: ");
        int salary = sc.nextInt();

        if(personage >= 21){
            if(salary >= 30000){
                System.out.println("Loan Approved!");
            }
            else{
                System.out.println("Loan Rejected! Due to low salary");
            }
        }
        else{
            System.out.println("Loan Rejected! Due to age criteria");
        }
System.out.println();
System.out.println();
        System.out.println("Bonus Eligibility!");
        System.out.println("Enter the experience of the Person: ");
        int experience = sc.nextInt();
        System.out.println("Enter the performance of the person: ");
        int performance  = sc.nextInt();

        if(experience >= 5){
            if(performance  >= 4){
                System.out.println("20% Bonus Approved!");
            }
            else{
                System.out.println("10% Bonus Approved!");
            }
        }
        else{
            System.out.println("No Bonus to less Experience");
        }
System.out.println();
System.out.println();
        System.out.println("ATM Transaction!");
        System.out.println("Enter the PIN(1234): ");
        int PIN = sc.nextInt();
        System.out.println("Enter the balance of the person: ");
        int balance  = sc.nextInt();

        if(PIN == 1234){
            if(balance  > 0){
                System.out.println("Withdrawal Successful");
            }
            else{
                System.out.println("Insufficient Balance");
            }
        }
        else{
            System.out.println("Invalid PIN");
        }
System.out.println();
System.out.println();
        System.out.println("Mupltiplication Tables!");
        System.out.println("Enter the Number to multiply: ");
        int mul = sc.nextInt();
        System.out.println("Enter the number till you need: ");
        int end = sc.nextInt();

        for (int i = 1 ; i <= end ; i++ ){
            System.out.println(mul + " X " + i + " = " + ( mul * i ));
        }
        

    }
}
