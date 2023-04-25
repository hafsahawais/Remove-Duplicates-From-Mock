const {clean_application, iterate, cleanArray} = require('../src/cleanApplication')

const mock_application =  {
    "versions": [
        {
            "objects": [
                {
                    "key": "object1",
                    "name": "Object 1",

                },
                {
                    "key": "object2",
                    "name": "Object 2",

                },
                {
                    "key": "object1",
                    "name": "Object 1",

                }
            ],
            "scenes": [
                {
                    "key": "scene1",
                    "name": "Scene 1",

                },
                {
                    "key": "scene2",
                    "name": "Scene 2",

                },
                {
                    "key": "scene1",
                    "name": "Scene 1",

                }
            ]
        }
    ]
}

const expected_application =  {
    "versions": [
        {
            "objects": [
                {
                    "key": "object1",
                    "name": "Object 1",

                },
                {
                    "key": "object2",
                    "name": "Object 2",

                }
            ],
            "scenes": [
                {
                    "key": "scene1",
                    "name": "Scene 1",

                },
                {
                    "key": "scene2",
                    "name": "Scene 2",
                }
            ]
        }
    ]
}
const test_array = [
    {
        "key": "k1"
    },
    {
        "key": "k2"
    },
    {
        "key": "k3"
    },
    {
        "key": "k1"
    }
]
const expected_array = [
    {
        "key": "k1"
    },
    {
        "key": "k2"
    },
    {
        "key": "k3"
    }
]
describe('Test to check clean application', () => {

    test('should return clean array', () => {

        const actual_array = cleanArray(test_array)
        expect(actual_array).toEqual(expected_array)

    })

    test('returns a new json file with no duplicates', () => {

        iterate(mock_application)
        expect(clean_application).toEqual(expected_application)

    })

});
