public class MinMax {
    public static void main(String[] args) {
        int[] arr = {10,9,23,1,3,78,34};

        int min = arr[0];
        int max = arr[0];

        for(int i = 0 ; i < arr.length ; i++){
            if(arr[i] < min){
                min = arr[i];
            }

            if(arr[i] > max){
                max = arr[i];
            }
        }

        System.out.println("Max value is : " + max);
        System.out.println("Min value is : " + min);
    }
}
