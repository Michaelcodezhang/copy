#include <iostream>
using namespace std;
int main() {
    int a1=0,a2=1,a3=1,n=0,i=0;
    cin>>n;
    if(n==1){
        cout<<a1;
    }
    else if(n==2){
        cout<<a2;
    }
    else{
        while(i<n-2){
            a3=a1+a2;
            a1=a2;
            a2=a3;
            i++;
        }
        cout<<a3;
    }
    return 0;
}