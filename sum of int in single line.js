import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String[] arr = str.split(" ");
        int sum = 0;
        
        int[] intr = new int[arr.length];
        for(int i=0;i<arr.length;i++){ 
            intr[i]=Integer.parseInt(arr[i]);
            
        }
        for(int i=0;i<intr.length;i++){
             sum += intr[i];
        }
        System.out.println(sum);
    }
}
