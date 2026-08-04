public class Array {

    public static void reverse(int[] arr){
        int left = 0;
        int right = arr.length - 1;

        while(left < right){
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
                    

    }
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50};
        reverse(arr);
        System.out.println("Reversed Array is : ");

        for(int num : arr){
            System.out.print(num + " ");
        }
    }
}
