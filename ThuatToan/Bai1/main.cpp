#include <iostream>

using namespace std;

struct Vector{
    float x;
    float y;
};

void change(Vector &A, Vector &B){
    A.x+=B.x;
    A.y+=B.y;
}

Vector Caculated(Vector A, Vector B)
{
    B.x-=A.x;
    B.y-=A.y;
    return B;
}




int main()
{
    Vector A,B,C;
    A.x=5; A.y=10;
    B.x=-5; B.y=5;
    C.x=-3; C.y=13;
    Vector X,Y,Z;
    float a,b,c,d,e,f;
    cin>>a>>b>>c>>d>>e>>f;
    X.x=a; X.y=b;
    Y.x=c; Y.y=d;
    Z.x=e; Z.y=f;
    change(B,A);
    change(X,A);
    change(Y,B);
    change(Z,C);
    cout<<Caculated(X,Y).x<<" "<<Caculated(X,Y).y<<"\n";
    cout<<Caculated(X,Z).x<<" "<<Caculated(X,Z).y<<"\n";
    cout<<Caculated(Y,Z).x<<" "<<Caculated(Y,Z).y<<"\n";

}
