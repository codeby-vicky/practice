public class Bajaj implements Bike {
    @Override
    public void speed(){
        System.out.println("speed of Bajaj: 300");
    }
    @Override
    public void cost(){
        System.out.println("cost of Bajaj: 300000");
}
    public static void main(String[] args) {
        Bike bi=new Bajaj();
        bi.cost();
        bi.speed();
        Bike b=new Suzuki();
        b.cost();
        b.speed();
        }
    }
