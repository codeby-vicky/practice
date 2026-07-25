import java.util.Scanner;

class Login{
    Scanner sc = new Scanner(System.in);

    Login(){
    System.out.println("Enter any one here:");
        System.out.println("1. Admin");
        System.out.println("2. Customer");

        int role = sc.nextInt();

        if (role == 1) {

            System.out.println("Welcome! Admin Page is under update.");

        } else if (role == 2) {

            sc.nextLine();

            System.out.println("Enter your name:");
            String name = sc.nextLine();

            String regex = "^(?=.*[0-9])(?=.*[!@#$%^&*+_><]).{8,}$";

            System.out.println("Enter Password:");
            String password = sc.nextLine();

            while (!password.matches(regex)) {

                System.out.println("Invalid Password!");
                System.out.println("Password should contain:");
                System.out.println("- Minimum 8 characters");
                System.out.println("- At least one number");
                System.out.println("- At least one special character");

                System.out.println("Enter Password Again:");
                password = sc.nextLine();
            }

            System.out.println("Login Success!");

        }
}
}

class Booking {

    Scanner sc = new Scanner(System.in);
    int seatCount;

    Booking() {

        System.out.println("Enter your Movie:");
        System.out.println("1. Leo");
        System.out.println("2. Singam");
        System.out.println("3. Thunivu");

        int movie = sc.nextInt();

        if (movie < 1 || movie > 3) {
            System.out.println("Invalid Movie!");
            return;
        }

        System.out.println("Movie Available");

        for (int i = 1; i <= 150; i += 10) {
            for (int j = i; j < i + 10; j++) {
                System.out.printf("%3d ", j);
            }
            System.out.println();
        }

        System.out.print("How many seats do you want to book? ");
        seatCount = sc.nextInt();

        for (int i = 1; i <= seatCount; i++) {

            System.out.print("Enter Seat Number " + i + ": ");
            int seatNo = sc.nextInt();

            if (seatNo >= 1 && seatNo <= 150) {
                System.out.println("Seat " + seatNo + " booked.");
            } else {
                System.out.println("Invalid Seat Number");
            }
        }

        System.out.println("Booking Successful!");
    }
}

class Rebook {

    Booking booking;

    Rebook() {

        Scanner sc = new Scanner(System.in);

        System.out.println("Need to book again? Enter 1");
        int decision = sc.nextInt();

        if(decision == 1){
            booking = new Booking();
        }
        sc.close();
    }
}

class Payment{
    Payment(Booking b){
        int Totalamount = b.seatCount * 179; 
        System.out.println("You booked " + b.seatCount + " Seats");
        System.out.println("Total Amount for you Movie is " + Totalamount);
    }
}

class Demo {
    public static void main(String[] args) {

        System.out.println("PVR Cinemas");
        Login l1 = new Login();
        Booking b1 = new Booking();

        Rebook r1 = new Rebook();

        if(r1.booking != null){
            b1 = r1.booking;
        }

        Payment p1 = new Payment(b1);
        
    }
}