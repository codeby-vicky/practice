import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Vector;

public class Task {

    public static void main(String[] args) {

        ArrayList<Object> list=new ArrayList<>();

        Scanner sc=new Scanner(System.in);
        while (true) { 
            System.out.println("1. enter user data 2 view data 3 exit ");
        
            int a=sc.nextInt();

            if(a==1){
                System.out.println("no of user");
                int b=sc.nextInt();
                for(int i=0;i<b;i++){
                    
                    System.out.println("enter ur name");
                    sc.nextLine();

                    String name=sc.nextLine();

                    System.out.println("enter ur age");
                    int age=sc.nextInt();
                    sc.nextLine();

                    System.out.println("enter ur department");
                    String department=sc.nextLine();

                    list.add(name);
                    list.add(age);
                    list.add(department);  


            }
                


            }
            else if(a==2){
                System.out.println("user deatils");

                for (int i = 0; i< list.size();i=i+3) {

                    String name = (String) list.get(i);
                    int age = (Integer) list.get(i + 1);
                    String department = (String) list.get(i + 2);

                    System.out.println("Name : " + name);
                    System.out.println("Age : " + age);
                    System.out.println("Department : " + department);
                    System.out.println("---------------------");

                    
                    
                
                    
                }

                System.out.println("thank u");

            }
            else if(a==3){
                System.out.println("thank for ur visit");
                break;
            }


                
        }
        
       
    }
}