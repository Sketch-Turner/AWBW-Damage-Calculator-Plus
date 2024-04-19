# AWBW Damage Calculator Plus

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Errors](#errors)

## Introduction
AWBW Damage Calculator Plus is a web extension that expands the functionality of the regular damage calculator by allowing calculation of sequential attacks and side-by-side comparison of different attacks. 
Functionality and availability of the original Damage Calculator is unchanged.

## Installation
The extension is currently available for Chrome on the Chrome web store.

## Usage
The icon can be found next to the original Damage Calculator.

![Location](images/tutorial/toggle_location.png)

Once the calculator is open, it functions the same as the original with a few key differences.

### HP
Unit HP is displayed as a value from 1-100. Changes to the HP effect the number displayed at the bottom right corner of the unit. 
The value displayed is the unit's HP divided by 10 and rounded up. A unit with 1-10 HP will display 1, 11-20 will display 2, ect.
The display value effects the unit's attack power, luck rolls, and defense bonuses from terrain. 

![HP](images/tutorial/hp_display.png)

### Add Button
![Add Button](images/add_icon.png)

The Add Button will appear in the bottom right corner if the defender has a chance to survive after the attacker fires.
When a new calculation is added, the defender of the current calculation will be carried over. By default the defender is assumed to have taken the minimum damage possible from the attacker.

![Defender HP](images/tutorial/defender_hp.png)

Multiple future outcomes can be examined at once. Each click of the Add Button adds a follow-up attack.
In this example, tank + mech garuntees a kill whereas tank + infantry doesn't.

![Follow-Up Attack Comparison](images/tutorial/multiple_paths.png)

### Delete Button
![Delete Button](images/delete_icon.png)

The Delete Button is located in the bottom left corner. Pressing this button will delete the calculation and any follow-up attacks that occur after.

### New Calc Button
![New Calc Button](images/new_calc_icon_20x20.png)

The New Calc Button is located in the bottom left and allows the comparison of different attack orders. 
In the example below, Max has his SCOP ready and an anti-air 8 spaces from the bomber. 

![Move Order Example](images/tutorial/calc_comparison_game.png)

With a sacrifice of the 4 HP tank, it's possible to take out the enemy tank! While your instinct might be to pop the SCOP and charge in, notice that with the SCOP active, the enemy tank has a chance not to kill the 4 HP tank. If Max sacrifices the 4 HP tank and then uses the SCOP, the kill is garunteed.

![Move Order Calcs](images/tutorial/calc_comparison.png)

### Focusing
Clicking on the top of a calculation will minimize it and all follow-up attacks from that calculation. The minimized calc will show a summary that takes up less space.
Minimized calculations will update if a previous calculation is changed. Clicking a minimized calculation will return it to full size.

![Focusing](images/tutorial/focus.png)

### Invalid Calculations
Sometimes, a change to one calculation will make future ones invalid. 

Initially, the follow-up attack is valid because the Defender will always survive.

![Valid](images/tutorial/valid.png)

After changing the unit used in the first attack to an Anti-Air, the follow-up attack becomes invalid since the Defender will always be killed.

![Invalid](images/tutorial/invalid.png)

Invalid calculations can be deleted to save space or left alone.

### Valid and Invalid Inputs
By default, changes to the defender or attackers that break game logic are not allowed. An alternate cursor will be used when hovering over an attribute that may not be altered.
All attributes of the first attack may be changed.

![First Attack Valid Changes](images/tutorial/root_valid.png)

All changes made in the past will update future attacks. Changes that would be possible (Green) are allowed (e.g. Defender loses a Comm Tower or Attacker gains a Comm Tower).
Changes that would contradict something in the past (Red) are not allowed (e.g. Defender terrain changes in the middle of Attacker's turn).
Once a COP or SCOP has been activated, all future attacks must also have it activated.

![Follow-Up Attack Valid Changes](images/tutorial/follow_up_valid.png)

## Errors
Report errors [here](https://forms.gle/my2XMuUk14ZDjry46).
Feel free to contribute! this is my first JS project an I could definately use some help.
