public class College extends University{
    
    @Override
    public void ug(){
    System.out.println("THis ug course in College");
    }

    @Override
    public void pg(){
        System.out.println("This is pg course in College");
    }

    public static void main(String[] args) {
        College c = new College();
        c.ug();
        c.pg();
    }
}
