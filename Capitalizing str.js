import java.util.*;
public class Main2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        char ch[] = str.toCharArray();
        boolean space = true;
        for (int i = 0; i < ch.length; i++) {
            if (Character.isLetter(ch[i])){
                if(space){
                    ch[i]=Character.toUpperCase(ch[i]);
                    space=false;
                }
            }
            else{
                space=true;
            }
        }
        String str1= String.valueOf(ch);
        System.out.println(str1);
    }
}
