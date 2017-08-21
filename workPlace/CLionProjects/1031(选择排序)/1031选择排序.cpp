#include <iostream>
using namespace std;
int main() {
    int data[11];
    int i=0,j=0,dmin=0,t=0,nmin;
    for(i=1;i<=10;i++)
    {
        cin>>data[i];
    }
    for(i=1;i<=10;i++)
    {
        dmin=data[i];
        nmin=i;
        for(j=i+1;j<=10;j++)
        {
            if(dmin>data[j])
            {
                dmin=data[j];
                nmin=j;
            }
        }
        if(nmin!=i)
        {
            t=data[nmin];
            data[nmin]=data[i];
            data[i]=t;
        }
    }
    for(i=1;i<=10;i++)
    {
        if(i<10)
        {
            cout<<data[i]<<endl;
        }
        else
        {
            cout<<data[i];
        }
    }
    return 0;
}