#include<iostream>
using namespace std;
int main()
{
    int data[11];
    int i=1;
    for(i=1;i<=10;i++)
    {
        cin>>data[i];
    }
    for(i=10;i>=1;i--)
    {
        if(i>1)
        {
            cout<<data[i]<<" ";
        }
        else
        {
            cout<<data[i];
        }
    }
    return 0;
}