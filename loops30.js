let squares = new Array();
for(let i = 0; i <= 7; i++)
{
    squares[i] = new Array();
    for(let j = (i * 5) + 1; j <= 5 * i + 5; j++)
        if (squares[i] == null)
            squares[i] = j;
        else
            squares[i].push(j);
}
console.log(squares)