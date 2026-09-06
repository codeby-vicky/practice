import java.util.ArrayList;
import java.util.HashSet;

public class ArrayListPrac{
    public static void main(String[] args) {
        ArrayList<Integer> a = new ArrayList();
        a.add(10);
        a.add(20);
        a.add(30);
        a.add(20);

        // System.out.println(a.get(2));
        // System.out.println(a.get(1));

        // for(int n : a){
        //     System.out.println(n);
        // }
        int max = a.get(0);
        int min = a.get(0);
        int sum = 0;

        for(int n : a){
            if(n > max){
                max = n;
            }
            if(n < min){
                min = n;
            }
            sum = sum + n;
        }
        System.out.println("max" +max);
        System.out.println("min" +min);
        System.out.println("sum"+sum);

        int ar[] = {10,20,30,20,10,40,50,30};
        HashSet<Integer> seen = new HashSet<>();
        for(int n : ar)
        {
            if(seen.contains(n)){
                System.out.println("Dup"+n);
            }
            seen.add(n);
        }
    }
}