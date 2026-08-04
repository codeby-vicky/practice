public class Checksort {
    public static void main(String[] args) {
        int[] arr = {10,23,34,98,99};
        boolean isSorted = true;
        
        for(int i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                isSorted = false;
                break;
            }
        }

        if(isSorted){
            System.out.println("The Array is Sorted");
        }
        else{
            System.out.println("Not Sorted");
        }
    }
}
