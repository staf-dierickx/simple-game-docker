var propertiesReader = require("properties-reader");

function writeProperties (filePath, properties)
{
    var props = propertiesReader(filePath, 'utf-8', { saveSections: false });
    
    Object.keys(properties).forEach(key => { // write all properties
        if (!properties[key] == "") { // check if property is empty
            const property = props.get(key);
            const newProperty = properties[key];
            
            // console.log("prop: "+ property);
            // console.log("key:"+ newProperty);

            if (property != newProperty) { // check if property changed
                console.log('properties-parser::setting property: '+ key +'=' + newProperty)
                props.set(key, properties[key]);
            }
        }
    })

    props.save(filePath, function then(err, data) { // save all properties
        if (err) {
            console.log("properties-parser::error: could not write propertes file: "+ err);
        }
        console.log("properties-parser::saved properties to ", filePath);
    });
}

module.exports = { writeProperties };
