#include<bits/stdc++.h>
using namespace std;
string testques(int N)
{
    string str="";
    while(N)
    {
        int d=N%10;
        str=str+to_string(d);
        N/=10;
    }
    return str;

}
int main()
{
    cout<<testques(4567);
    return 0;
    
}