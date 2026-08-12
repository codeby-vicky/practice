public class Arrayconcept
{
    public static void main(String[] args) 
    {
        int[] arr = new int[7];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 4;
        arr[4] = 5;
        arr[5] = 6;

        int size = 6;
        int index = 3;
        int element = 30;

        if(size < arr.length)
        {
            for(int i = size ; i > index ; i--){
                arr[i] = arr[i-1];
            }
                arr[index] = element;
                size++;
        }
        else{
            System.out.println("Array is Full!");
        }

        for (int num : arr){
            System.out.println(num + " ");
        }
   }
}      


