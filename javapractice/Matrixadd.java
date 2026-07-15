import java.util.Scanner;

class Matrixadd{
    public static void main (String []args){
        Scanner sc = new Scanner(System.in);
        int [][] a= new int[2][2];
        int [][] b = new int[2][2];
        int [][] c = new int[2][2];

        for (int i = 0 ; i < a.length ; i ++){
            for(int j = 0; j < a[i].length ; j++){
                System.out.print("Enter the value for the position " +i+ "" +j+ " for matrix 1 : ");
                a[i][j] = sc.nextInt();  
            }
        }

        for (int i = 0 ; i < b.length ; i ++){
            for(int j = 0; j < b[i].length ; j++){
                System.out.print("Enter the value for the position " +i+ "" +j+ " for matrix 2 : ");
                b[i][j] = sc.nextInt();  
                System.out.println();
            }
        }       
        
        for (int i = 0 ; i < c.length ; i ++){
            for(int j = 0; j < c[i].length ; j++){
                c[i][j] = a[i][j] + b[i][j];
                System.out.print(c[i][j]+"");
            }
            System.out.println();
        }

    }
}