import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 11;
        int count = 0;
        if(n == 1){
            count = 2;
        }
        else{
        for(int i = 1 ; i <= n ; i++)
        {
            if(n%i == 0)
            {
                count ++;
            }
        }
    }
        if(count == 2){
            System.out.println("It is Prime");
            }
        else{
            System.out.println("Not a Prime");
            }
    }
}
