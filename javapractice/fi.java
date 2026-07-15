class fita{
    //batch=>memory alloca
    int age;
    String stuname;
    String course;

    fita(int age,String stuname,String course){
        this.age=age;
        this.stuname=stuname;
        this.course=course;
        System.out.println("constructor call");
    }
    int a=10;

    void room1(){
        System.out.println("stuname is "+this.stuname+"age is "+this.age+"joing course "+this.course);
    }
}


class Fi {
    public static void main(String[] args) {

        fita f1=new fita(20,"viji","java");  
        fita f2=new fita(21,"kaviya","python");

       // f1.room1();
       // f2.room1();

       // System.out.println(f1.a);
       System.out.println(f1.stuname);
       System.out.println(f1.age);
       System.out.println(f1.course);
       System.out.println("-----------");

        System.out.println(f2.stuname);
       System.out.println(f2.age);
       System.out.println(f2.course);


       
    }
}