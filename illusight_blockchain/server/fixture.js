var fixtures = [
    {
        title: "Galena",
        price: "$7,785",
        copyright: "551018",
        filename: "Sasha"
        },
        {
        title: "Tad",
        price: "$5,527",
        copyright: "6766",
        filename: "Hiroko"
        },
        {
        title: "Dale",
        price: "$5,898",
        copyright: "15820-918",
        filename: "Charlotte"
        },
        {
        title: "Tasha",
        price: "$5,194",
        copyright: "13111",
        filename: "Hadley"
        },
        {
        title: "Yoshio",
        price: "$9,943",
        copyright: "90028",
        filename: "Lee"
        },
        {
        title: "Keely",
        price: "$9,015",
        copyright: "403225",
        filename: "Kirby"
        },
        {
        title: "Elizabeth",
        price: "$8,372",
        copyright: "0404 IL",
        filename: "Adria"
        },
        {
        title: "Tate",
        price: "$5,369",
        copyright: "32878",
        filename: "Kylee"
        },
        {
        title: "April",
        price: "$5,207",
        copyright: "5560",
        filename: "Venus"
        },
        {
        title: "Jack",
        price: "$6,213",
        copyright: "9758",
        filename: "Hayley"
        },
        {
        title: "Valentine",
        price: "$9,595",
        copyright: "88965-266",
        filename: "Meghan"
        },
        {
        title: "Chava",
        price: "$6,537",
        copyright: "63396",
        filename: "Germane"
        },
        {
        title: "Phillip",
        price: "$9,490",
        copyright: "6569",
        filename: "Olympia"
        },
        {
        title: "Belle",
        price: "$7,749",
        copyright: "767048",
        filename: "Autumn"
        }
]

Meteor.startup(() => {
    if(Masterpiece.find().count() === 0){
        console.log('데이터가 존재하지 않습니다. fixture 데이터를 입력합니다.');
        for(var i=0; i < fixtures.length; i++){
            Masterpiece.insert(fixtures[i]);
        }
    }
})