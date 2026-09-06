import java.util.HashMap;
import java.util.Scanner;

public class StudentCode {
    public static void main(String[] args) {
        HashMap<String, String> students = new HashMap<>();

        students.put("AFID1213", "Vignesh");
        students.put("AFID1214", "Santhosh");
        students.put("AFID1215", "Pugal");
        students.put("AFID1216", "Sharvesh");
        students.put("AFID1217", "Santhosh");

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the AFID Code : ");
        String afid = sc.nextLine();

        if(students.containsKey(afid)){
            System.out.println("Student : " + students.get(afid));
        }
        else{
            System.out.println("Student ID does not Match");
        }
    }
}
