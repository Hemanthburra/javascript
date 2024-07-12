#include <bits/stdc++.h>
using namespace std;

class shape{
    private:
        int a;
        int b;
    public:
        string v = "abhi";
        shape(){
            // this->a = ab;
            // this->b = bc;
            cout<<a<<" "<<b<<endl;
        }
        int add(int ab,int bc){
            this->a = ab;
            this->b = bc;
            return ab+bc;
        } 
        void less(){
            cout<<"this is less"<<endl;
        }
        void print(){
            cout<<a<<" "<<b<<endl;
        }
};

class mass : public shape{
    private:
        int c;
        int d;
    public:
        int add(int a,int b,int c){
            return a+b+c;
        }
        int add(int a,int b){
            return a+b;
        }
        void print(){
            cout<<"this is child"<<endl;
        }
};

int main() {
    mass s;
    s.less();
    // cout<<s.add(30,50)<<endl;
    // s.v = "ggg";
    // cout<<s.v;
    cout<<s.add(10,20);
    s.print();
    return 0;
}
