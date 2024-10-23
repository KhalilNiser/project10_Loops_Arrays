
/**
 *              ---- FOR_OF_LOOP ----
 * for...of loop:
 * This loop iterates over the values of iterable objects. In this case
 * it's iterating over the elements of the instruments in the array.
 * 
 *              ---- LET_OBJECT ----
 * let object:
 * This declares a variable named object which will hold the value of 
 * the current element in each iteration of the loop.
 * 
 *              ---- FOR_OF_LOOP_STATEMENT ----
 * In this example, I will try to use the same array of objects 
 * which I have created previously. Then I will use the for-of 
 * loop in order to update the existing object’s property’s value.
 */

    // Array of instruments
    var instruments_array = 
    [
        "Electric Guitar",
        "Bass Guitar",
         "Drums", 
         "Piano",
        "Zildjian Cymbals"
    ];

    var myString = "";
    var i;
    function instrumentFunction()
    {
    for( i = 0; i < instruments_array.length; i++ )
    {
       myString += instruments_array[ i ] + "<br>";

    }

    document.getElementById( "loop_id" ).innerHTML = 
    ( "Updated Instruments Data: " + myString );

    }
//              ---- END_FOR_OF_LOOP_STATEMENT ----



//              ---- WHILE_LOOP_STATEMENT ----
function calculateTheSum( arr )
{
    let sum = 0;

    let i = 0;

    while ( i < arr.length )
    {
        sum += arr[ i ];

        i++;
    }

    return sum;

}

const numbersArray = [ 1, 2, 3, 4, 5 ];

document.getElementById( "while_id" ).innerHTML = ( calculateTheSum( numbersArray ) );
//              ---- END_WHILE_LOOP_STATEMENT ----



//              ---- BREAK_STATEMENT ----
function breakFunction()
{
    const listArray = 
    [ "BMW", "Volvo", "Chevy", "Toyota", "Dodge", "Ford", "Honda", "Volks Wagon", "Mazda" ];

    let textArray = "";

    for ( let i = 0; i < listArray.length; i++ )
    {
        if ( i === 6 )
        {
            break;
        }

        textArray += "The List of Auto Makers " +  i + "<br>";
    }

    document.getElementById( "break_id" ).innerHTML = textArray;
}
//              ---- END_BREAK_STATEMENT ----



//              ---- CONTINUE_STATEMENT ----
function continueFunction()
{
    const listArray2 = 
    [ "BMW", "Volvo", "Chevy", "Toyota", "Dodge", "Ford", "Honda", "Volks Wagon", "Mazda" ];

    let textArray2 = "";

    for ( let i = 0; i < listArray2.length; i++ )
    {
        if ( i === 6 )
        {
            continue;
        }

        textArray2 += "The List of Auto Makers " +  i + "<br>";
    }

    document.getElementById( "continue_id" ).innerHTML = textArray2;
}
//              ---- END_CONTINUE_STATEMENT ----