function myFunction()
{
    document.getElementById('demo').innerHTML = "Paragraph changed.";
}

let counter = 0;

function Sumar()
{
    counter++;
    document.getElementById('demo').innerHTML = "Counter : " + counter;
    RenderizarImagen();
}

function Restar()
{
    counter--;
    document.getElementById('demo').innerHTML = "Counter : " + counter;
    RenderizarImagen();
}

function RenderizarImagen()
{
    if(counter > 5)
    {
        document.getElementById('myImage').src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png";
    }

    if(counter > 10)
    {
        document.getElementById('myImage').src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/800px-Squidward_Tentacles.svg.png";
    }
}