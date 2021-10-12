# pretty-edit
pretty-edit is a extension for visual studio code (vscode) that allow to insert increasing numbers, random numbers and letters.

## Usage
Command: pretty-edit

![Description](https://raw.githubusercontent.com/pmqtt/pretty-edit/master/images/out.gif)

## Possible commands 

| Command  | Parameters  | Description  |
|---|---|---|
|       | start_number | Insert numbers starting with start_number |
|       | start_number; increment |  Insert numbers starting with start_number. Next value is determined by the parameter increment  | 
| rand  | low ; high   |  insert random values in interval of low and high  |
| alpha | start_letter |  insert letters starting with start_letter |



## Fixed bugs in Current Version

* Trimming whitespaces from the parameter
