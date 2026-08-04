public class Zeroatend {
    public static void main(String[] args) {
        int[] arr = {10,0,34,12,22,0,0,12};
        int j =0;

        for(int i = 0 ; i < arr.length; i ++){
            if(arr[i]!=0){
                arr[j] = arr[i];
                j++;
            }
        }

        while(j < arr.length){
            arr[j] = 0;
            j++;
        }

        for(int num : arr){
            System.out.print(num + " ");
        }
    }
}
