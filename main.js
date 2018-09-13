
//----------------------------------
//          YOUR CODE
//----------------------------------
var counter = 0;
var width = 53;
var height = 81;
for (var i = 0; i< height; i++)
{
    // multiply by 15 to give a width of 15px
    y = i*15;
    for (var j = 0; j< width; j++)
    {
        // multiply by 15 to give a width of 15px
        x = j*15;
        create(x, y, colors[counter]);
        counter++;
    }
}