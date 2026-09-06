package org.company;
import org.client.Client;
public class Company extends Client{
    public void companyName(){
    System.out.println("Company Name is Accenture");
    }
    public static void main(String[] args) {
        Company c = new Company();
        c.companyName();
        c.clientName();
    }
}
