public class While {
    public static void main(String[] args) {
        int i = 1;

        while(i<=100)
        {
            //System.out.println("Hi " + i);
            i = i + 10;
            int j = i;
            while(j < j + 10)
            {
                System.out.println(j);
                j++;
            }
        }
        System.out.println();
    }
}
