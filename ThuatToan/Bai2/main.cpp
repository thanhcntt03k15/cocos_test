#include <iostream>

using namespace std;

int main()
{
    int n,cnt=0;
    cin>>n;
    int A[n+2][n+2];
    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            cin>>A[i][j];

    for (int i=n; i>=1; i--)
    {
        for (int j=1; j<=n; j++)
        {
            if (A[i][j] == 1)
                cnt++;
            if (cnt != 0 && (j == n or A[i][j] == 0))
            {
                cout<<cnt<<" ";
                cnt=0;
            }
        }
        cout<<"\n";
    }
    for (int j=1; j<=n; j++)
    {
        for (int i=n; i>=1; i--)
        {
            if (A[i][j] == 1)
                cnt++;
            if (cnt != 0 && (i == 1 or A[i][j] == 0))
            {
                cout<<cnt<<" ";
                cnt=0;
            }
        }
        cout<<"\n";
    }

}
