# rock_paper_scissor

In this project, I decided to use prior knowledge of event listeners and how to modify the DOM to directly show the results to the user, without having to use the console.

I could reduce the code, I was originally going to use the result variable to later define if you should increase the win or lose variable, but realised that, since I define resultTxt inside a loop, it could only exist inside that loop. So now I could remove completely the removeTxt and just type what to sow to the user in the .innerHTML.