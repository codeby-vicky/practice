import java.util.Scanner;
class Game{

            int ucount = 0;
            int ccount = 0;
            int dcount = 0;
    
        void play(){

        Scanner sc = new Scanner(System.in);

        String [] play = {"rock", "paper", "scissor"};

        System.out.println("5 Game Match - Minimum 3 plays to Win the match");
        for(int i = 0 ; i < 5 ; i ++)
            {
                System.out.println("--------------------------");
                System.out.println("Enter you play: ");
                String user = sc.nextLine().toLowerCase();

                int place = (int)(Math.random() * play.length);
                String com = play[place];

                if(user.equals(com))
                {
                    System.out.println("You plays : " + user);
                    System.out.println("Computer plays : " + com);
                    System.out.println("Draw");
                    System.out.println("--------------------------");
                    dcount++;
                }
                else if(user.equals("rock") && com.equals("scissor") || 
                        user.equals("paper") && com.equals("rock") ||
                        user.equals("scissor") && com.equals("paper"))
                {
                            System.out.println("You plays : " + user);
                            System.out.println("Computer plays : " + com);
                            System.out.println("You wins!...");
                            System.out.println("--------------------------");
                            ucount++;          
                }

                else
                {
                            System.out.println("You plays : " + user);
                            System.out.println("Computer plays : " + com);
                            System.out.println("Computer wins!..."); 
                            System.out.println("--------------------------");
                            ccount++;               
                }
            }
        }

    }

    class Winner{

        void Win(Game g){

        if(g.ucount >= 3){

            System.out.println("You wins " + g.ucount + " - " + g.ccount);
            System.out.println("You wins the match and won the trophy!");

        }

        else if(g.ccount >= 3){

            System.out.println("Computer wins " + g.ccount + " - " + g.ucount);
            System.out.println("Computer win the match and won the trophy!");

        }

        else if (g.ucount == g.ccount){

            System.out.println("Match draws");
            System.out.println("play again!");

            g.ucount = 0;
            g.ccount = 0;

            g.play();
            Win(g);
        }

        else if(g.ucount > g.ccount){

            System.out.println("You wins " + g.ucount + " - " + g.ccount);
            System.out.println("You wins the match and won the trophy!");

            }

        else if(g.ccount > g.ucount){

            System.out.println("Computer wins " + g.ccount + " - " + g.ucount);
            System.out.println("Computer win the match and won the trophy!"); 

            }
            
        }
    }

class RPS{
        public static void main(String[] args) {
        
        Game g = new Game();
        Winner w1 = new Winner();

        g.play();
        w1.Win(g);


    }

}
