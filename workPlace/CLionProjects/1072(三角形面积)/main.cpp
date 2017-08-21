#include <iostream>
#include<iomanip>
#include<cmath>
using namespace std;
int main() {
    float a,b,c,S,area;
    cin>>a>>b>>c;
    S=(a+b+c)/2;
    area=sqrt(S*(S-a)*(S-b)*(S-c));
    cout<<fixed<<setprecision(3)<<area;
    return 0;
}