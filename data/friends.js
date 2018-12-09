// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Tony the Tiger",
        photo: "https://upload.wikimedia.org/wikipedia/en/c/c8/Tony_the_Tiger_%28Kellogg%27s_Frosted_Flakes%27_mascot%29.jpg",
        scores: [
            "2",
            "4",
            "5",
            "5",
            "1",
            "1",
            "3",
            "2",
            "4",
            "2"
        ]
    },
    {
        name: "Toucan Sam",
        photo: "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/5814/1432171991-3-9861/Toucan_20Sam.jpg",
        scores: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "1",
            "2",
            "3",
            "4",
            "5",
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
