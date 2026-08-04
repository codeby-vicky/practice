public class Seclargest {
    public static void main(String[] args) {
        int[] arr = {10,23,34,12,22,98,21,12};
        int largest = 0;
        int secondLargest = -1;

        for(int i = 1 ; i < arr.length ; i ++){
            if(arr[i] > largest){
                secondLargest = largest;
                largest = arr[i];
            
            }
            else if(arr[i] > secondLargest && arr[i]!= largest){
                secondLargest = arr[i];
            }
        }

        System.out.println(" Second Largest no is : " + secondLargest);


    }
    
}
