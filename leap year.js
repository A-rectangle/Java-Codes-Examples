import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new scanner(System.in);
        int n = sc.nextInt();
        if(n%400==0 || (n%4==0 && n%100!=0)){//1900
            System.out.println("yes");
        }
        else{
            System.out.println("no");
        }
    }
}
