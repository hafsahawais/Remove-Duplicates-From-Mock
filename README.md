# Remove-Duplicates-From-Mock
Remove duplicate objects from mock json file 

# Orignal Task
The "mock_application.json" file in this repository contains data which represents an actual Knack application schema including all currently existing properties. Your code should process the data, remove any duplicates, and output a new JSON file "clean_application.json" which retains all other properties of the Knack application.

# My Effort

This solution aims to clean the mock_application.json from duplicate values that are present in fields(Array of objects) and in scenes(Array of objects).

To do this I have created functions: 

**cleanArray** function which traverses through the main object and then filters the duplicate values and returns false, if the value is unique then it gets set in the hashmap and return true.

**cleanObjectsAndScenes** function which traverses through the versions and then inside version it traverses through objects and scenes, from these array of objects it goes to fields and scenes. The fields and scenes array of objects are then passed to the cleanArray functions.

**cleanVersions** function which picks up the scenes and objects keys and passes to the cleanObjectAndScenes function along with another argument i.e. the array ( choose array of objects between fields and views) and returns a clean_versions.

**iterate** takes in the mock_application.json as data and traverses through it untile it finds versions and then assign the clean_versions to a variable called clean_application.

##Tests
Did'nt write too many tests just 2 unit tests to check the cleanArray and iterate function using Jest.

p.s. Used snake_case for variables and camelCase for functions for readiability.



