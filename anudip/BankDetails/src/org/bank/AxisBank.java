public class AxisBank extends BankInfo{
    
    @Override
    public void deposit(){
        System.out.println("This is Axisbank Deposit");
    }

    public static void main(String []args){

        AxisBank a = new AxisBank();
        a.deposit();
    }
}
