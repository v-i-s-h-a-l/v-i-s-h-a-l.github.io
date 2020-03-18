---
layout: post
title: "Scipting in Swift"
date: 2020-03-18
---
This post lays down an insight into how swift and scripting together can help in resolving many day to day problems as a programmer who works primarily on swift language.
## What is scripting
Scripting can be defined as a program that is usually intended to automate certain task(s). A primary focus of a scripting language does not build the application but might provide behavior to an existing application.
### Programming vs Scripting
Basically, all scripting languages are programming languages. The theoretical difference between the two is that scripting languages do not require the compilation step and are rather interpreted.
## Why swift-scripting
As a programmer who primarily works with swift, scripting in swift itself would mean:
1. less context switching, less hurdles to overcome (e.g. if they had to use python script, then they might have to understand how to divide/join arrays. But if this needs to be done in swift then they might already be familiar with it or would be easier to learn)
2. Getting to use libraries that one has already worked with, for example, Foundation, URLSession, Files etc.
3. One can also use shared code between the scripts and the application itself, i.e. using one's own custom libraries.

## Getting started with swift scripting
To get started lets craete a script that takes an input name and prints "Hello \(name)" in the Terminal.
1. Open Terminal, type `touch Greet.swift` and press enter.
2. Use `open Greet.swift` to open the file with Xcode and put the following code in it:
    ``` 
    import Foundation
    let name = CommandLine.arguments.last ?? "World"
    print("Hello \(name)!")
    ```
Save and return to terminal window.
3. Type `swift Greet.swift <name>` and press enter.

## Using Swift Package Manager (SwiftPM) to create an executable product or swift script
SwiftPM is swift’s own dependency management tool. It allows you to integrate reusable code / libraries into your own code. Also, it provides you a platform to export your code as a library or run it as an executable program. For a detailed understanding of SwiftPM refer: https://swift.org/package-manager/.
for details on usage of SwiftPM:
https://github.com/apple/swift-package-manager/blob/master/Documentation/Usage.md

## Common SwiftPM commands
```
swift package init --type executable
swift package init // swift package init --type library
swift package resolve // for resolving dependencies
swift package update // updating dependencies
swift package clean
swift build
swift run
swift package generate-xcodeproj
```
## Installing your script: creating a command line tool
To install the script as a tool, following commands need to be executed in the root folder of the repo:
```
swift build -c release
cd .build/release
cp -f <ProductName> /usr/local/bin/<tool-name>
```
for example: cp -f CommitWithBranchName /usr/local/bin/vcommit

## Example
https://github.com/v-i-s-h-a-l/GetFolderDetails
 
## References and thanks to
1. John Sundell's talk: https://www.youtube.com/watch?v=KntiH9E4TGQ
2. https://www.geeksforgeeks.org/whats-the-difference-between-scripting-and-programming-languages/
