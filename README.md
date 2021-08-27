Hi SmartGuyCodes,

This is my letter to your future self. This is your ultimate beginner's guide for nodejs in easy steps

Step 1 - What is Node?

Node is a runtime that allows you to run JavaScript on the server. Well, how does JavaScript work?

JavaScript is often described as some variation of “high-level, single-threaded, garbage-collected, interpreted (or just-in-time compiled), prototype-based, multi-paradigm, dynamic language with a non-blocking event loop”. You may encounter these terms during an JS job interview, but understanding their meaning will help you better understand the behavior of your code. Let’s unpack each of these key terms.

NB:
Keep in mind, you don't *need* to know these concepts to start using JavaScript productively. It may take years of development experience before they really start to sink in, so don't worry if it feels overwhelming.

High Level

High-Level refers to the abstraction the language provides over the machine’s bare-metal hardware. JavaScript is considered high-level because it does not require direct interaction with the operating system, hardware. In addition, it does not require memory-management like C/C++ because the runtime always uses garbage-collection.

Interpreted or Just-in-Time Compiled
Interpreted means the source code is converted to bytecode and executed at runtime (as opposed to being compiled to a machine code binary at build time). This is also why JS is commonly called a “scripting language”. Originally, it was only interpreted, but modern JS engines like V8, Spidermonkey, and Nitro use various techniques to perform Just-in-Time Compilation or JIT for better performance. Developers still use JS like an interpreted language, while the engine magically compiles parts of source code to low-level machine code behind the scenes.

Multi-Paradigm
Multi-Paradigm means the language is general-purpose or flexible. JS can be used for declarative (functional) or imperative (object-oriented) programming styles.

Dynamic Weakly Typed
Dynamic most often refers to the type system. JS is dynamic weakly typed language, meaning you do not annotate variables with types (string, int, etc) and the true types are not known until runtime.

Prototypal Inheritance
Prototypal Inheritance means that objects can inherit behaviors from other objects. This differs from classical inheritance where you define a class or blueprint for each object and instantiate it. We will take a deep dive into prototypal inheritance later in this course.

Event-Loop Concurrency Model
Single-Threaded means that JS can only run one instruction at a time, even if your CPU has multiple cores and available threads.

So this begs the question… How does JavaScript handle jobs at the same time (i.e. concurrently)?

Event Loop refers to a feature implemented by engines like V8 that allow JS to offload tasks to separate threads. Browser and Node APIs execute long-running tasks separately from the the main JS thread, then enqueue a callback function (which you define) to run on the main thread when the task is complete. This is why JS is called non-blocking because it should only ever wait for synchronous code from your JS functions. Think of the Event Loop as message queue between the single JS thread and the OS.

Step 2 - Install Node

Follow these instructions to install NodeJS. This course uses Node version 12, nvm install 12.

Node Version Manager NVM

Node Version Manager NVM makes it easy to switch between Node versions in your local environment. I highly recommend using it over the native install on your system.

Mac and Linux

Simply run the install script from the command line.

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

Restart your terminal. You should now be able to easily install and manage Node versions.

nvm install 10

nvm use 10

Windows

NVM is not available on Windows, but there is a solid alternative with nvm-windows. It provides an installer than you can download from the repo. 

Once installed you will have access commands similar to those above.