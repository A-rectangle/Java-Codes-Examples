import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        StringBuffer alphabets = new StringBuffer();
        StringBuffer numbers = new StringBuffer();
        StringBuffer specials = new StringBuffer();
        for (int i=0;i<str.length();i++){
            if(Character.isDigit(str.charAt(i))){
                numbers.append(str.charAt(i));

            } else if (Character.isAlphabetic(str.charAt(i))) {
                alphabets.append(str.charAt(i));

            }
            else {
                specials.append(str.charAt(i));
            }
        }
        System.out.println(alphabets);
        System.out.println(numbers);
        System.out.println(specials);
    }
}
