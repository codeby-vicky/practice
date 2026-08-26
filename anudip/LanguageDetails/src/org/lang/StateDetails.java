package org.lang;

public class StateDetails extends LanguageDetails {
    public void southIndia(){
        System.out.println("States are : TamilNadu, Kerala, AP, Karnataka, Telangana");
    }
    public void northIndia(){
        System.out.println("States are : Delhi, Himachal, Haryana, Punjab, J&K");
    }
    public static void main(String[] args) {
        StateDetails s = new StateDetails();
        s.tamilLanguage();
        s.englishLanguage();
        s.hindiLanguage();
        s.southIndia();
        s.northIndia();
    }
}
