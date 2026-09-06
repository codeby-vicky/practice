import java.util.Scanner;

public class Vote{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Age of the person : ");
        int age = sc.nextInt();

        if(age >= 18 && age <= 60)
        {
            System.out.println("You are Eligible for Voting.");
        }
        else if(age >=60){
            System.out.println("You can vote under Senior citizen category.");
        }
        else{
            System.out.println("You are Not Eligible because of our Indian Law.");
        }
    }
}