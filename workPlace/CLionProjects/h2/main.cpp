#include <iostream>
using namespace std;
int main() {
    int n,k=0,a,i=0,sum=0;
    while(cin>>n)
    {
        if(n==0)
        {
            break;
        }
        else
        {
            for(i=0;i<n;i++){
                cin>>a;
                sum+=a;
            }
        }
        cout<<sum<<endl;
        sum=0;
    }
    return 0;
}