
let clean_application = {}

const cleanArray = (arr) => {
    let key_set = new Set();

    // traversing the array of objects to find duplicate values
    // filters based on element key
    return Object.values(Object.fromEntries(Object.entries(arr).filter(([_,obj]) => {
        // checking if set has object key
        if (key_set.has(obj.key))
            return false;
        else {
            key_set.add(obj.key)
            return true;
        }
    })))
}

const cleanObjectsAndScenes = (versionsObjectElement, arr) => {
    let cleaned_objects_scenes_array = []

    // traverse through the versions (Array of objects)
    versionsObjectElement.forEach((object) => {

        let cleaned_objects_and_scenes = {}
        // traverse through object(Array of objects) and scenes(Array of objects)
        Object.keys(object).forEach((key) => {
            if(arr === 'fields') {
                // if object key is fields then pass to cleanArray function
                if(key === 'fields')
                    cleaned_objects_and_scenes[key] = cleanArray(object[key]);

                else
                    cleaned_objects_and_scenes[key] = object[key];
            }
            if( arr === 'views') {
                // if object key is views then pass to cleanArray function
                if(key === 'views')
                cleaned_objects_and_scenes[key] = cleanArray(object[key]);

            else
                cleaned_objects_and_scenes[key] = object[key];
            }

        })
       //  fill array with non duplicated values
       cleaned_objects_scenes_array.push(cleaned_objects_and_scenes)
    })
    return cleaned_objects_scenes_array
}


const cleanVersions = (versionsObject) => {
    let clean_versions = {}
    // traversing through the versions(array of objects)
    Object.keys(versionsObject).forEach(key => {
        // if Object key is objects then pass the objects to cleanObjectsAndScenes function

        if (key === 'objects') {
            let cleanedObjects = cleanObjectsAndScenes(versionsObject[key] , "fields")
            clean_versions[key] = cleanArray(cleanedObjects);
        }
        // if Object key is scenes then also pass the scenes to cleanObjectsAndScenes function
        else if (key === 'scenes') {
            let cleanedScenes = cleanObjectsAndScenes(versionsObject[key] , "views")
            clean_versions[key] = cleanArray(cleanedScenes);
        }
        else
            clean_versions[key] = versionsObject[key];
    })
    return clean_versions;
}



const iterate = (obj) => {
   Object.keys(obj).forEach(key => {
        // traversing through the outermost object and if key is versions then clean versions
        if (key === 'versions') {
           clean_application[key] = [cleanVersions(obj[key][0])]
        }
        else
           clean_application[key] = obj[key];
    })
}


module.exports = {
    iterate,
    clean_application,
    cleanArray
}





