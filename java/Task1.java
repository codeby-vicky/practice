import java.util.ArrayList;
import java.util.Scanner;

class Task1{
    public static void main(String[] args) {
        
        ArrayList<Object> a = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        while(true){

            System.out.println("1. Create Data 2. Display 3. Exit");
            int input = sc.nextInt();

            if(input == 1){

                System.out.println("Enter number of users: ");
                int count = sc.nextInt();

                for (int i = 0 ; i < count ; i ++){
                sc.nextLine();
                System.out.println("Enter your name: ");
                String name = sc.nextLine();

                System.out.println("Enter your age: ");
                int age = sc.nextInt();
                
                sc.nextLine();
                System.out.println("Enter the department: ");
                String dept = sc.nextLine();

                a.add(dept);
                a.add(name);
                a.add(age);
            }
            System.out.println("User Details Added Successfully!..");
        }

        else if(input == 2){

            for (int i = 0 ; i < a.size() ; i ++){
                String name = (String) a.get(i);
                int age = (Integer) a.get(i+1);
                String dept = (String) a.get(i+2);

                System.out.println("Name is : " + name);
                System.out.println("Age is : " + age);
                System.out.println("Department is : " + dept);
                System.out.println("--------------------------");
            }
        }

        else if(input == 3){
            System.out.println("Thank u for visiting!..");
            break;
        }
        
    }

    }
}