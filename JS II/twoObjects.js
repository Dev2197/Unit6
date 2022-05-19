let obj1 = {
    name : "masai",
    batch : "web15"
}

let obj2 = {
    name : "masai",
    batch : "web15",
}

let obj1Length = Object.keys(obj1).length
let obj2Length = Object.keys(obj2).length


if(obj1Length == obj2Length)
{
    let count = 0;
    for(key1 in obj1)
    {
        for(key2 in obj2)
        {
            if(obj1[key1] == obj2[key2])
            {
                count++;
            }
        }
    }

    if(count == obj1Length)
    {
        console.log(true)
    }
    else{
        console.log(false)
    }
}
else{
    console.log(false)
}

