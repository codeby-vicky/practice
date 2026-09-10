import java.util.Random;
import java.util.Scanner;

public class RPS {

    static String user = null;

    public static void main(String[] args) {

        String[] game = {"rock", "paper", "scissor"};

        Random r = new Random();
        int index = r.nextInt(game.length);
        String gamevalue = game[index];

        System.out.println("Computer selected: " + gamevalue);

        Scanner sc = new Scanner(System.in);

        System.out.println("Rock, Paper, Scissor");
        System.out.println("Choose any one within 3 seconds:");

        Sample timer = new Sample();
        timer.setDaemon(true);
        timer.start();

        Thread inputThread = new Thread(() -> {
            user = sc.nextLine().toLowerCase();
        });

        inputThread.setDaemon(true);
        inputThread.start();

        try {
            timer.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        if (user == null) {
            System.out.println("Time's up!");
        } else {

            System.out.println("You selected: " + user);

            if (!user.equals("rock") &&
                !user.equals("paper") &&
                !user.equals("scissor")) {

                System.out.println("Invalid choice!");

            } else if ((user.equals("paper") && gamevalue.equals("rock")) ||
                       (user.equals("rock") && gamevalue.equals("scissor")) ||
                       (user.equals("scissor") && gamevalue.equals("paper"))) {

                System.out.println("You Win!");

            } else if (user.equals(gamevalue)) {

                System.out.println("Draw!");

            } else {

                System.out.println("Computer Wins!");
            }
        }

        System.out.println("Game Ends!..");

        sc.close();
    }
}