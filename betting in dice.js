import java.util.*;
public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int count_even=0;
      int count_odd=0;
      for (int i=0;i<1;i++){
          String str = sc.nextLine();
          String[] arr=str.split(" ");
          int[] num = new int[arr.length];
          for (int j=0;j<arr.length;j++){
             num[j]= Integer.parseInt(arr[j]);
              if(num[j]%2==0){
                  count_even++;
              }else{
                  count_odd++;
              }
          }
      }
      int X = sc.nextInt();
      int Y = sc.nextInt();
      int diff = -(count_even*Y)+(count_odd*X);
        System.out.println(diff);
    }
}
