
// C++ program for count in C++ STL for 
// array 
#include <bits/stdc++.h> 
using namespace std; 
  
int main() 
{ 
    int sum = 0;
    int arr[] = { 3, 4, 5, 3, 3 }; 
    int n = sizeof(arr) / sizeof(arr[0]); 
    int one = count(arr, arr + n, 1); 
    int two = count(arr, arr + n, 2); 
    int three = count(arr, arr + n, 3); 
    int four = count(arr, arr + n, 4); 
    int five = count(arr, arr + n, 5);
    int six = count(arr, arr + n, 6);  
    if (one >= 3) {
        sum += 1000;
        one -= 3;
    }
    if (five >= 3) {
        sum += 500;
        five -= 3;
    }
    sum += one * 100;
    sum += ((two >= 3) ?  2 * 100 : 0);
    sum += ((three >= 3) ? 3 * 100 : 0);
    sum += ((four >= 3) ?  4 * 100 : 0);
    sum += five * 50;
    sum += ((six >= 3) ? 6 * 100 : 0);
  
    cout << sum;
    return 0; 
} 