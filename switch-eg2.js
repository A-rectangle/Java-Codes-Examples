import java.sql.SQLOutput;
import java.util.*;
public class Main {
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        String name=" ";
        int max=0;
        int n = sc.nextInt();
        for(int i=0;i<=n;i++){
            String data=sc.nextLine();
            String data_name=" ";
            int total=0;
            int m1=0;
            int m2=0;
            int m3=0;
            String arr[]=data.split(":");
            for(int j=0;j< arr.length;j++){
                switch (j){
                    case 0:
                        data_name=arr[j];
                        break;
                    case 1:
                        m1=Integer.parseInt(arr[j]);
                        break;
                    case 2:
                        m2=Integer.parseInt(arr[j]);
                        break;
                    case 3:
                        m3=Integer.parseInt(arr[j]);
                        break;
                }

            }
            total=m1+m2+m3;
            if(total>max){
                max=total;
                name=data_name;
            }

        }
        System.out.println(name);

    }
}
