import java.util.Arrays;
import java.util.Scanner;

public class Pract {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int arr[][][] = new int[3][4][5];

        for( int i = 0; i < 3 ; i++)
            {
            for(int j = 0; j < 4; j++)
                {
                    for (int k = 0 ; k < 5 ; k ++){
                        arr[i][j][k] = (int)(Math.random() * 100);
                    }
            }
            System.out.println();
        }

        for(int i = 0 ; i < arr.length ; i ++){
            for(int j = 0; j < 4; j++)
                {
              Arrays.sort(arr[i][j]);
                }
        }

        for(int i = 0; i < 3 ; i++)
            {
            for(int j = 0; j < 4; j++)
                {
                    for(int k = 0 ; k < 5 ; k ++){
                System.out.print(arr[i][j][k] + " ");
                System.out.println();
                System.out.println();
                System.out.print(i +j +k);
                    }
            }
            System.out.println();
        }
    }
}
