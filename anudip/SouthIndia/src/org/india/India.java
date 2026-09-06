package org.india;

import org.kerala.Kerala;

public class India extends Kerala {

    public void india() {
        System.out.println("These all languages are used in Southern parts of INDIA");
    }

    public static void main(String[] args) {

        India i = new India();

        i.tamil();
        i.telugu();
        i.malayalam();
        i.india();
    }
}