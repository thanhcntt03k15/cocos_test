#include <bits/stdc++.h>
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
    ifstream input("D:/Test_Dmobin/cocos_test/ThuatToan/Bai1/in.txt");
    fstream output;
    output.open("D:/Test_Dmobin/cocos_test/ThuatToan/Bai1/out.txt");
    Vector A,B,C;
    A.x=5; A.y=10;
    B.x=-5; B.y=5;
    C.x=-3; C.y=13;
    Vector X,Y,Z;
    float a,b,c,d,e,f;
    input>>a>>b>>c>>d>>e>>f;
    X.x=a; X.y=b;
    Y.x=c; Y.y=d;
    Z.x=e; Z.y=f;
    change(B,A);
    change(X,A);
    change(Y,B);
    change(Z,C);
    output<<Caculated(X,Y).x<<" "<<Caculated(X,Y).y<<"\n";
    output<<Caculated(X,Z).x<<" "<<Caculated(X,Z).y<<"\n";
    output<<Caculated(Y,Z).x<<" "<<Caculated(Y,Z).y<<"\n";

}
