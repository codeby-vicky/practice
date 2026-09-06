import java.util.Scanner;

public class Employee {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the empId: ");
        int empId = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the empname: ");
        String empName = sc.nextLine();
        System.out.println("Enter the empmailID: ");
        String empEmail = sc.nextLine();
        System.out.println("Enter the empphoneno: ");
        Long empPhoneno = sc.nextLong();
        System.out.println("Enter the empsalary: ");
        int empSalary = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the empgender: ");
        String empGender = sc.nextLine();
        System.out.println("Enter the empcity: ");
        String empCity = sc.nextLine();

        System.out.println(empId);
        System.out.println(empName);
        System.out.println(empEmail);
        System.out.println(empPhoneno);
        System.out.println(empSalary);
        System.out.println(empGender);
        System.out.println(empCity);

    }
}
