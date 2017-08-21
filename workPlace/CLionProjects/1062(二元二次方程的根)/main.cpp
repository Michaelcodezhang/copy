#include <iostream>
#include<iomanip>
#include<cmath>
using namespace std;
float x1=0,x2=0;
void abovezero(float a, float b, float c, float d);
void equalzero(float a, float b,float c, float d);
void underzero(float a, float b, float c, float d);
int main() {
    float a,b,c,d;
    cin>>a>>b>>c;
    d=b*b-4*a*c;
    if(d>0)
    {
        abovezero(a,b,c,d);
    }
    else if(d==0)
    {
        equalzero(a,b,c,d);
    }
    else
    {
        underzero(a,b,c,d);
    }
    return 0;
}
void abovezero(float a, float b, float c, float d) {
    x1=((-b+sqrt(d))/(2*a));
    x2=((-b-sqrt(d))/(2*a));
    cout<<fixed<<setprecision(3)<<"x1="<<x1<<" "<<"x2="<<x2;
}
void equalzero(float a, float b,float c, float d) {
    x1=(-b/(2*a));
    x2=(-b/(2*a));
    cout<<fixed<<setprecision(3)<<"x1="<<x1<<" "<<"x2="<<x2;
}
void underzero(float a, float b, float c, float d) {
    float p,p3,p4;
    p=(-b/(2*a));
    p3=(sqrt(-d)/(2*a));
    if(p3<0){
        p3=-p3;
    }
    cout<<fixed<<setprecision(3)<<"x1="<<p<<"+"<<p3<<"i"<<" "<<"x2="<<p<<"-"<<p3<<"i";
}