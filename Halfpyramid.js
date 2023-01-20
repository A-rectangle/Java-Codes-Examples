import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=1; i<=n; i++){ // (1<=3)
            for(int j=1; j<=i; j++){  // 1<=1,J++ -> 2<=1 (fails) -> goes next
                System.out.print(j+" ");
            }
            System.out.println();// goes to next line
        }

    }
}
