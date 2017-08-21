public class Main {
    public static void main(String[] args) {
        int i,n=30;
        String[] s=new String[n];
        for(i=1;i<=n;i++){
            if((i%3==0)&&(i%5==0)){
                s[i-1]="fizz buzz";
            }
            else if((i%3==0)&&(i%5!=0)){
                s[i-1]="fizz";
            }
            else if((i%3!=0)&&(i%5==0)){
                s[i-1]="buzz";
            }
            else{
                s[i-1]=""+i;
            }
        }
    }
}
