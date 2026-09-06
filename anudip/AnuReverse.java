public class AnuReverse {
    public static void main(String[] args) {
        String Str = "Anudip Foundation";

        String Result = " ";

        for(int i = Str.length() - 1 ; i >= 0  ; i-- ){
            char ch = Str.charAt(i);
            Result = Result + ch ;
        }
        System.out.println("Original String : " +Str);
        System.out.println("Reversed String : "+Result);
    }
}
