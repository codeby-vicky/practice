public class Phone {
    public void phoneInfo(){
        System.out.println("This is Mobile Decription");
    }
    public void phoneInfo(String brand){
        System.out.println("Mobile name : " +brand);
    }
    public void phoneInfo(String MLocation, int pincode){
        System.out.println("Manufacturing Location : " +MLocation+" Pincode : " +pincode);
    }
    public static void main(String[] args) {
        Phone p = new Phone();
        p.phoneInfo();
        p.phoneInfo("Samsung");
        p.phoneInfo("Korea", 238930);
    }
}
