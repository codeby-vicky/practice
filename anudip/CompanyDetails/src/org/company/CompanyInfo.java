public class CompanyInfo {
    public void companyName(){
        System.out.println("This is ABC Company");
    }

    public void companyName(String Location){
        System.out.println("This is ABC Company and Located in " +Location);
    }

    public void companyName(String Location, int Pincode){
        System.out.println("This is ABC Company and Located in " +Location+ " " +Pincode);
    }

    public static void main(String[] args) {
        CompanyInfo c = new CompanyInfo();
        c.companyName();
        c.companyName("Chennai");
        c.companyName("Chennai",600004 );
    }

}
