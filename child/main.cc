#include <iostream>
#include <windows.h>


int main(){
    int i = 0;

    while (i < 3) {
        std::cout <<"hey there\n";
        Sleep(2000);
        i++;
    }

    return 0;
}