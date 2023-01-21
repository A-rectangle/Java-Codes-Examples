import java.util.*;
public class Main2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String mon = str.substring(3,5);
        int n = Integer.parseInt(mon);
        switch(n){
            case  01:
                System.out.println("January");
                break;
                case  02:
                System.out.println("feb");
                break;
            case  03:
                System.out.println("mar");
                break;
            case  04:
                System.out.println("april");
                break;
            case  05:
                System.out.println("may");
                break;
            case  06:
                System.out.println("June");
                break;
                
        }


    }
}
