// GreedDice game.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
using namespace std;

int main()
{
	int dice[5];
	int x;
	int count1 = 0;
	int count2 = 0;
	int count3 = 0;
	int count4 = 0;
	int count5 = 0;
	int count6 = 0;
	int sum = 0;

	for (int x = 0; x < 5; x++) {
		cout << "Enter the score of turn " << x + 1 << endl;
		cin >> dice[x];
		cout << endl;
	}


	for (x = 0; x < 5; x++) {
		if (dice[x] == 1) {
			count1++;
		}
	};
	for (x = 0; x < 5; x++) {
		if (dice[x] == 2) {
			count2++;
		}
	};
	for (x = 0; x < 5; x++) {
		if (dice[x] == 3) {
			count3++;
		}
	};
	for (x = 0; x < 5; x++) {
		if (dice[x] == 4) {
			count4++;
		}
	};
	for (x = 0; x < 5; x++) {
		if (dice[x] == 5) {
			count5++;
		}
	};
	for (x = 0; x < 5; x++) {
		if (dice[x] == 6) {
			count6++;
		}
	};
	

	if (count1 < 3) {
		sum = sum + count1 * 100;
	
	}
	if (count1 >= 3) {
			sum = sum + 1000 + (5 - count1)*100;
		}

	if (count2 >= 3) {
			sum = sum + 200;
		}

	if (count3 >= 3) {
			sum = sum + 300;
		}

	if (count4 >= 3) {
			sum = sum + 400;
		}
	if (count5 < 3) {
		sum = sum + count5 * 50;
	}
	if (count5 >= 3) {
			sum = sum + 500;
		}

	if (count6 >= 3) {
			sum = sum + 600;
		}

		cout << " Your total score is: " << sum << endl;

		return 0;
	
}
