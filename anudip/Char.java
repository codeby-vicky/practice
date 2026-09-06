public class Char {
    public static void main(String[] args) {
        String str = "#@!Hi, My name is Vignesh M N";
        String sample = str.replace(" ", "");
        int SplCharCount = 0;
        int VowelCount = 0;
        int ConsonantCount = 0;
        int UpperCaseCount = 0;
        int LowerCaseCount = 0;

        for(int i = 0 ; i < sample.length() ; i++){
            char ch = sample.charAt(i);
            if(!((ch >= 'A' && ch <= 'Z') ||
                 (ch >= 'a' && ch <= 'z' ) ||
                 (ch >= '0' && ch <= '9') ||
                 (ch == ' '))){
            SplCharCount++;
            }
            else if((ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') || 
        (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')){
            VowelCount++;
        }
        else{
            ConsonantCount++;
        }

        if(ch >= 'A' && ch <= 'Z'){
            UpperCaseCount++;
        }
        if(ch >= 'a' && ch <= 'z'){
            LowerCaseCount++;
        }
        }
        System.out.println("Sample Sentence : " +sample);
        System.out.println("Special Character Count : " +SplCharCount);
        System.out.println("Vowel Count : " +VowelCount);
        System.out.println("Consonant Count : " +ConsonantCount);
        System.out.println("Upper Case Count : " +UpperCaseCount);
        System.out.println("Lower Case Count : " +LowerCaseCount);
    }
}
