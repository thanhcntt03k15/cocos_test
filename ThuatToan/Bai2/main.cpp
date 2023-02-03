#include <bits/stdc++.h>

using namespace std;

int main()
{
    ifstream input("D:/Test_Dmobin/cocos_test/ThuatToan/Bai2/in.txt");
    fstream output;
    output.open("D:/Test_Dmobin/cocos_test/ThuatToan/Bai2/out.txt");
    int n,cnt=0;
    input>>n;
    int A[n+2][n+2];
    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            input>>A[i][j];

    for (int i=n; i>=1; i--)
    {
        for (int j=1; j<=n; j++)
        {
            if (A[i][j] == 1)
                cnt++;
            if (cnt != 0 && (j == n or A[i][j] == 0))
            {
                output<<cnt<<" ";
                cnt=0;
            }
        }
        output<<"\n";
    }
    for (int j=1; j<=n; j++)
    {
        for (int i=n; i>=1; i--)
        {
            if (A[i][j] == 1)
                cnt++;
            if (cnt != 0 && (i == 1 or A[i][j] == 0))
            {
                output<<cnt<<" ";
                cnt=0;
            }
        }
        output<<"\n";
    }

}
