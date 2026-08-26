package org.emp;
public class Employee {
    public void empId(){
        System.out.println("This is Employee ID");
    }
    public void empName(){
        System.out.println("This is Employee Name");
    }
    public void empDob(){
        System.out.println("This is Employee Date of Birth");
    }
    public void empPhone(){
        System.out.println("This is Employee Phone Number");
    }
    public void empEmail(){
        System.out.println("This is Employee Mail ID");
    }
    public void empAddress(){
        System.out.println("This is Employee Address");
    }
    public static void main(String []args){
        Employee e = new Employee();
        e.empId();
        e.empName();
        e.empDob();
        e.empPhone();
        e.empEmail();
        e.empAddress();
    }
}
