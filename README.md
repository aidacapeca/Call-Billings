# Call Billing Project
This project simulates an application that given a phone call history asociated to a client it can calculate the final cost the client has to pay. 

## Considerations during the development
* The origin (international/local) of a call is assume as an atribute in the data of every call. 
* A client structure data has: 
    * name (string)
    * category ("NW"/"EX"). 
* A call register structure data has: 
    * hour
    * period("A"/"P" this for "AM" or "PM")
    * day of the week (numbered from monday(01) to sunday(07))
    * duration of the call (in HH:MM format)
    * origin ("L"/"I" this for "Local" or "International") 

## Getting started 
1. To run and compile this project it's necesary to have node installed, in case Node itsn't installed here's the oficial documentation https://nodejs.org/es/download/ 
2. On the project folder open a console and do: "npm install" this is necesary to install the project dependencies, this could take a little bit of time. 
3. Once the dependencies has been installed do "node index.js" this will run the program and show in the console the output of the project.
4. To modify the client data or the call history open with a text editor the index.js file and change the data on: 
    * Line 24 for client data 
    * From line 18 to 20 insidde the setCallHistory function for the call history. 
    ** This data should follow the structure mentioned on the considerations above. 
5. To run the unit test on the console do "cd test", this will move you to the test folder and do "npm test" on the console to verify the test response. 


# Author: Aida Perez - aida.capeca@gmail.com