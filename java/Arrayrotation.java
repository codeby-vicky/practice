
public class Arrayrotation {
    public static void main(String[] args) {
        int[] arr = {10,23,34,12,22,98,21,12};
        int k = 3;

        int n = arr.length;
        int[] result = new int[n];

        for(int i = 0; i < n ; i++){
            result[(i+k)%n] = arr[i];
        }

        System.out.println("Rotated Array");

        for(int num : result){
            System.out.print(num + " ");
        }
    }
}
