import java.util.Scanner;

public class Total {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter studentId");
        int studentId = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter studentname");
        String studentName = sc.nextLine();
        System.out.println("Enter Mark1");
        int Mark1 = sc.nextInt();
        System.out.println("Enter mark2");
        int Mark2 = sc.nextInt();
        System.out.println("Enter mark3");
        int Mark3 = sc.nextInt();
        System.out.println("Enter mark4");
        int Mark4 = sc.nextInt();
        System.out.println("Enter mark5");
        int Mark5 = sc.nextInt();

        int Total = Mark1+Mark2+Mark3+Mark4+Mark5;
        System.out.println("Total mark is: " +Total);

        int avg = Total / 5;
        System.out.println("Average : " +avg);
    }
}
