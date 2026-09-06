public class Fibo {
    public static void main(String[] args) {

        long a = 0;
        long b = 1;

        for(int i = 1; i <= 50; i++)
        {
            System.out.print(a + " ");

            long c = a + b;
            a = b;
            b = c;
        }
    }
}