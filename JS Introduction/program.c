#include<stdio.h>

int * takeInput(int *  a , int n){
    for(int i = 0 ; i < n ; i++){
        scanf("%d" , a[i]);
    }
    return a;
}

void display(int  * a , int n){
    for(int i = 0 ; i < n ;i++){
        printf("%d " , a[i]);
    }
}



int main(){
     int n;
    scanf("%d" , &n);
    int * a = takeInput(a , n);
    display(a , n);
    
    return 0;
}