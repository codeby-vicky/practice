public class Sample extends Thread{

        @Override 
        public void run()
        {
        for(int i = 1 ; i <= 5 ; i ++){
            try{
            Thread.sleep(1000);
            System.out.print(i);
            }
            catch (Exception e){}
        }
    }
    }

