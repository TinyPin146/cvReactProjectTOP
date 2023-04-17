# My CV creator project for the TOP curriculum

## Objective
**Project description:** https://www.theodinproject.com/lessons/node-path-javascript-cv-application#assignment
I aim to create a basic CV generator site in order to learn the basics of the React framework.
I intend to write this little summary as the project unfolds so as to record my struggles and thought-process almost real time.

---
## Challanges and thoughts
1. My first job is to decide what components will i need on my page.
   1. I might need only 1 input component and modify its structure/role with props. 
   2. I need 3 sections:
      1. General info
      2. Educational experience
      3. Practical experience
2. My main problem im facing is where the states should live.
   1. If the input's state is stored at the level of the Input comp., I need to find a way to lift it to upper level comp.s
   2. If the state lives in an upper parent then i need to pass a callback fn as prop so the child comp. can update the parents state.
   3. **The 2nd option seems to be a better option**
3. Okay, now i will have to create a mock implementation of an "input-to-CV" render
   1. Challenge: I needed to divide the state lifting. So on input change the forms state updates. And on form submit the App's state gets the form state and rerenders the CV.
4. And after step #3 i will have to create the whole app (seems like repetition, but we will see.)
   1. One challenge i see is conditional rendering based on form types (basic data, experience, education)
5. A better approach would have been to lay out the whole app first in a static manner
6. Now i need to create 3 comp.s for the CV component
7. Now comes the part where i need to come up with how to add more sections and how to mod existing data
   1. Modding:
      1. 
   2. Adding section:

---
## Process
1. Create basic page layout with header and footer
2. Create input component
3. Create form component
4. Experiment with reusable input component and data vis.
5. Created CV component. Realized i need three more components. 
6. Created basicCVSection comp. data now shows up from those form fields
7. Created other sections and gave them a base style
8. Added buttons that show up on hover